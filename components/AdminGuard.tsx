"use client";

import { useState } from "react";

const ADMIN_PIN = "739284";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  function unlock(e: React.FormEvent) {
    e.preventDefault();

    if (pin === ADMIN_PIN) {
      setUnlocked(true);
      setError("");
    } else {
      setError("رمز PIN غير صحيح");
      setPin("");
    }
  }

  if (!unlocked) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#080808] px-5 text-white"
      >
        <form
          onSubmit={unlock}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0d0d0d] p-8"
        >
          <div className="mb-2 text-center text-4xl font-black">
            <span className="text-red-500">7</span>BOB
          </div>

          <div className="mb-8 text-center text-xs tracking-[0.3em] text-white/30">
            STORE ADMIN
          </div>

          <h1 className="mb-3 text-center text-2xl font-bold">
            لوحة الإدارة
          </h1>

          <p className="mb-7 text-center text-sm text-white/40">
            أدخل رمز PIN للدخول
          </p>

          <input
            type="password"
            inputMode="numeric"
            autoComplete="off"
            maxLength={6}
            value={pin}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setPin(value);
              setError("");
            }}
            placeholder="رمز PIN"
            className="mb-4 w-full rounded-2xl border border-white/10 bg-[#111] px-4 py-4 text-center text-xl tracking-[0.5em] text-white outline-none placeholder:text-white/30 focus:border-red-500/50"
          />

          {error && (
            <div className="mb-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={pin.length !== 6}
            className="w-full rounded-2xl bg-red-500 px-5 py-4 font-bold transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            دخول لوحة الإدارة
          </button>
        </form>
      </main>
    );
  }

  return <>{children}</>;
}
