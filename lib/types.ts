import { ZodError } from 'zod';

export type FormState = {
  status: 'IDLE' | 'SUCCESS' | 'ERROR';
  message: string;
  values?: Record<string, string>;
};

export const EMPTY_FORM_STATE: FormState = {
  status: 'IDLE',
  message: '',
};

export function toFormState(status: FormState['status'], message: string): FormState {
  return { status, message };
}

export function fromErrorToFormState(error: unknown): FormState {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR',
      message: error.issues[0]?.message ?? 'Validation failed',
    };
  }
  if (error instanceof Error) {
    return {
      status: 'ERROR',
      message: error.message,
    };
  }
  return {
    status: 'ERROR',
    message: 'Something went wrong',
  };
}
