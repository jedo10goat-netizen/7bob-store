"use client";

import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const ADMIN_EMAIL = "jedo10goat@gmail.com";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      if (
        currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()
      ) {
        setUser(currentUser);
      } else {
        setUser(null);
      }

      setLoading(false);
    });
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setMessage("");
    setLoggingIn(true);

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      if (
        result.user.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()
      ) {
        await signOut(auth);
        throw new Error("Unauthorized");
      }
    } catch {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    } finally {
      setLoggingIn(false);
    }
  }

  async function resetPassword() {
    setError("");
    setMessage("");

    setResetting(true);

    try {
      await sendPasswordResetEmail(auth, ADMIN_EMAIL);

      setMessage(
        "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريد المدير."
      );
    } catch {
      setError(
        "تعذر إرسال رسالة إعادة التعيين. تأكد من إعدادات البريد في Firebase."
      );
    } finally {
      setResetting(false);
    }
  }

  async function logout() {
    await signOut(auth);
  }

  if (loading) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#080808] text-white"
      >
        <div className="text-white/50">جاري التحقق...</div>
      </main>
    );
  }

  if (!user) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#080808] px-5 text-white"
      >
        <form
          onSubmit={login}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0d0d0d] p-8"
        >
          <div className="mb-2 text-center text-4xl font-black">
            <span className="text-red-500">7</span>BOB
          </div>

          <div className="mb-8 text-center text-xs tracking-[0.3em] text-white/30">
            STORE ADMIN
          </div>

          <h1 className="mb-3 text-center text-2xl font-bold">
            تسجيل دخول الإدارة
          </h1>

          <p className="mb-7 text-center text-sm text-white/40">
            أدخل بيانات حساب المدير للوصول إلى لوحة الإدارة.
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="البريد الإلكتروني"
            autoComplete="email"
            required
            className="mb-3 w-full rounded-2xl border border-white/10 bg-[#111] px-4 py-4 text-white outline-none placeholder:text-white/30 focus:border-red-500/50"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
            autoComplete="current-password"
            required
            className="mb-3 w-full rounded-2xl border border-white/10 bg-[#111] px-4 py-4 text-white outline-none placeholder:text-white/30 focus:border-red-500/50"
          />

          <button
            type="button"
            onClick={resetPassword}
            disabled={resetting}
            className="mb-5 text-sm text-white/50 transition hover:text-white"
          >
            {resetting
              ? "جاري إرسال الرابط..."
              : "نسيت كلمة المرور؟"}
          </button>

          {error && (
            <div className="mb-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white/70">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loggingIn}
            className="w-full rounded-2xl bg-red-500 px-5 py-4 font-bold transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loggingIn
              ? "جاري تسجيل الدخول..."
              : "تسجيل الدخول"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <div>
      <div className="fixed left-4 top-4 z-50">
        <button
          onClick={logout}
          className="rounded-xl border border-white/10 bg-[#111] px-4 py-2 text-xs text-white/60 transition hover:text-white"
        >
          تسجيل الخروج
        </button>
      </div>

      {children}
    </div>
  );
}
