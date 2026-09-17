"use client";

import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  async function login() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
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
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 text-center">
          <div className="mb-2 text-4xl font-black">
            <span className="text-red-500">7</span>BOB
          </div>

          <div className="mb-8 text-xs tracking-[0.3em] text-white/30">
            STORE ADMIN
          </div>

          <h1 className="mb-3 text-2xl font-bold">
            لوحة الإدارة
          </h1>

          <p className="mb-7 text-sm leading-6 text-white/40">
            سجّل الدخول بحساب Google للوصول إلى لوحة الإدارة.
          </p>

          <button
            onClick={login}
            className="w-full rounded-2xl bg-red-500 px-5 py-4 font-bold transition hover:bg-red-600"
          >
            تسجيل الدخول باستخدام Google
          </button>
        </div>
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
