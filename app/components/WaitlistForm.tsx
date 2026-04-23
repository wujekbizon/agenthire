'use client';

import { useActionState } from 'react';
import { joinWaitlistAction } from '@/app/actions';
import { EMPTY_FORM_STATE } from '@/lib/types';

export default function WaitlistForm() {
  const [state, action, pending] = useActionState(
    joinWaitlistAction,
    EMPTY_FORM_STATE
  );

  if (state.status === 'SUCCESS') {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-8">
        <div
          className="w-2 h-2 rounded-full bg-[#9DFFB0] mx-auto"
          style={{ boxShadow: '0 0 12px #9DFFB0, 0 0 24px rgba(157,255,176,0.4)' }}
        />
        <p
          className="text-sm text-[#9DFFB0] tracking-wider"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          {state.message}
        </p>
        <p
          className="text-[10px] uppercase tracking-[0.3em] text-[#E6F4F1]/30"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          Node registered
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="w-full flex flex-col gap-6">
      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-[10px] uppercase tracking-[0.3em] text-[#E6F4F1]/40"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@domain.com"
          defaultValue={state.values?.email ?? ''}
          disabled={pending}
          className="bg-transparent border border-[#9DFFB0]/15 text-[#E6F4F1] placeholder-[#E6F4F1]/20 px-5 py-4 text-sm rounded-sm outline-none focus:border-[#9DFFB0]/40 focus:bg-[rgba(157,255,176,0.02)] focus:shadow-[0_0_16px_rgba(157,255,176,0.06)] transition-all duration-300 disabled:opacity-50"
          style={{ fontFamily: 'var(--font-manrope)' }}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-[10px] uppercase tracking-[0.3em] text-[#E6F4F1]/40"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          Message <span className="normal-case tracking-normal opacity-60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us what you're building, hiring for, or what brought you here."
          defaultValue={state.values?.message ?? ''}
          disabled={pending}
          className="bg-transparent border border-[#9DFFB0]/15 text-[#E6F4F1] placeholder-[#E6F4F1]/20 px-5 py-4 text-sm rounded-sm outline-none focus:border-[#9DFFB0]/40 focus:bg-[rgba(157,255,176,0.02)] focus:shadow-[0_0_16px_rgba(157,255,176,0.06)] transition-all duration-300 resize-none disabled:opacity-50"
          style={{ fontFamily: 'var(--font-manrope)' }}
        />
      </div>

      {/* Error */}
      {state.status === 'ERROR' && (
        <p
          className="text-xs text-[#FF6B6B] tracking-wide"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          {state.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 w-full bg-[#9DFFB0] text-[#030508] font-semibold px-10 py-5 rounded-sm text-sm uppercase tracking-widest hover:bg-[#E6F4F1] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(157,255,176,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        {pending ? 'Registering node...' : 'Join the Network'}
      </button>
    </form>
  );
}
