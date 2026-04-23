'use server';

import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { waitlist } from '@/db/schema';
import {
  type FormState,
  toFormState,
  fromErrorToFormState,
} from '@/lib/types';

const JoinWaitlistSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .max(500, 'Message cannot exceed 500 characters')
    .optional(),
});

export async function joinWaitlistAction(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = (formData.get('email') as string) ?? '';
  const message = (formData.get('message') as string) ?? '';

  const validationResult = JoinWaitlistSchema.safeParse({
    email,
    message: message || undefined,
  });

  if (!validationResult.success) {
    return {
      ...fromErrorToFormState(validationResult.error),
      values: { email, message },
    };
  }

  try {
    const existing = await db
      .select({ id: waitlist.id })
      .from(waitlist)
      .where(eq(waitlist.email, validationResult.data.email))
      .limit(1);

    if (existing.length > 0) {
      return {
        ...toFormState('ERROR', 'This email is already on the waitlist.'),
        values: { email, message },
      };
    }

    await db.insert(waitlist).values({
      email: validationResult.data.email,
      message: validationResult.data.message ?? null,
    });
  } catch (error) {
    return {
      ...fromErrorToFormState(error),
      values: { email, message },
    };
  }

  return toFormState(
    'SUCCESS',
    "You're in. We'll reach out when the network goes live."
  );
}
