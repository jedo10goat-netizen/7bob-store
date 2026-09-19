"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const banners = [
  {
    title: "7BOB STORE",
    text: "متجرك لشحن الألعاب والخدمات الرقمية",
    small: "شحن سريع • خدمة موثوقة",
  },
  {
    title: "7BOB ACCOUNTS",
    text: "بيع وشراء حسابات eFootball",
    small: "انضم إلى قروب الحسابات",
    link: "https://chat.whatsapp.com/KHrqactCFMfE5hSfLdl0OD",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [banner, setBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBanner((current) => (current + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentBanner = banners[banner];

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#090909] text-white"
      style={{
        fontFamily:
          "'IBM Plex Sans Arabic', 'Noto Sans Arabic', Arial, sans-serif",
      }}
    >
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090909]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5">

          <button
            type="button"
            aria-label="السلة"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-white transition hover:border-red-500/40"
          >
            <span className="text-lg">▱</span>
          </button>

          <Link href="/" className="text-center">
            <div className="text-[27px] font-black tracking-tight">
              <span className="text-red-500">7</span>
              <span>BOB</span>
            </div>

            <div className="text-[9px] font-bold tracking-[0.35em] text-white/40">
              STORE
            </div>
          </Link>

          <button
            type="button"
            aria-label="القائمة"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-xl transition hover:border-red-500/40"
          >
            ≡
          </button>

        </div>
      </header>      <section className="mx-auto max-w-6xl px-5 pt-5">

        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#101010]">

          {currentBanner.link ? (
            <a
              href={currentBanner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <BannerContent banner={currentBanner} />
            </a>
          ) : (
            <BannerContent banner={currentBanner} />
          )}

        </div>

        <div className="mt-4 flex justify-center gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`البانر ${index + 1}`}
              onClick={() => setBanner(index)}
              className={`h-1.5 rounded-full transition-all ${
                banner === index
                  ? "w-7 bg-red-500"
                  : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

      </section>

      <section className="mx-auto max-w-6xl px-5 pt-12">

        <div className="text-center">
          <p className="text-sm font-medium text-red-500">
            أهلاً بك
          </p>

          <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            مـرحـباً بـك فـي 7BOB STORE
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/45">
            وجهتك لشحن الألعاب والخدمات الرقمية بطريقة سهلة وسريعة.
          </p>
        </div>

      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12">

        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold text-red-500">
              SERVICES
            </p>

            <h2 className="mt-1 text-xl font-bold">
              خدماتنا
            </h2>
          </div>
        </div>

        <div className="flex justify-center">

          <Link
            href="/efootball"
            className="group w-[150px] text-center sm:w-[170px]"
          >
            <div className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0d0d0d] transition duration-300 group-hover:-translate-y-1 group-hover:border-red-500/30 group-hover:shadow-[0_10px_35px_rgba(255,0,0,0.12)]">
              <img
                src="/efootball.png"
                alt="شحن بيس موبايل"
                className="aspect-square w-full object-cover"
              />
            </div>

            <h3 className="mt-3 text-sm font-bold leading-6">
              شحن بيس موبايل
            </h3>

            <p className="text-xs text-white/35">
              eFootball
            </p>
          </Link>

        </div>

      </section>      <footer className="border-t border-white/[0.06] px-5 py-10">
        <div className="mx-auto max-w-6xl text-center">

          <div className="text-xl font-black">
            <span className="text-red-500">7</span>
            BOB
          </div>

          <div className="mt-1 text-[9px] font-bold tracking-[0.35em] text-white/30">
            STORE
          </div>

          <p className="mt-5 text-xs text-white/30">
            © 2026 جميع الحقوق محفوظة
          </p>

        </div>
      </footer>

      {menuOpen && (
        <div className="fixed inset-0 z-[100]">

          <button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <aside className="absolute right-0 top-0 h-full w-[300px] max-w-[88%] border-l border-white/[0.08] bg-[#0b0b0b] shadow-2xl">

            <div className="flex h-[76px] items-center justify-between border-b border-white/[0.06] px-5">

              <div>
                <div className="text-xl font-black">
                  <span className="text-red-500">7</span>
                  BOB
                </div>

                <div className="text-[8px] font-bold tracking-[0.3em] text-white/30">
                  STORE
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-lg text-white/70"
              >
                ×
              </button>

            </div>

            <nav className="px-4 py-6">

              <MenuLink
                href="/"
                label="الرئيسية"
                onClick={() => setMenuOpen(false)}
              />

              <MenuLink
                href="/wallet"
                label="المحفظة"
                onClick={() => setMenuOpen(false)}
              />

              <MenuLink
                href="/transactions"
                label="المعاملات"
                onClick={() => setMenuOpen(false)}
              />

              <MenuLink
                href="/orders"
                label="الطلبات"
                onClick={() => setMenuOpen(false)}
              />

              <MenuLink
                href="/account"
                label="حسابي"
                onClick={() => setMenuOpen(false)}
              />

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold text-white/70 transition hover:bg-white/[0.04] hover:text-white"
              >
                <span>التواصل</span>
                <span className="text-white/25">‹</span>
              </a>

              <div className="mt-2 flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold text-white/30">
                <span>تحميل التطبيق</span>
                <span className="text-[10px]">قريباً</span>
              </div>

            </nav>

            <div className="absolute bottom-6 right-5 left-5 border-t border-white/[0.06] pt-5 text-center">
              <p className="text-[11px] text-white/25">
                7BOB STORE
              </p>
            </div>

          </aside>
        </div>
      )}

    </main>
  );
}function BannerContent({
  banner,
}: {
  banner: {
    title: string;
    text: string;
    small: string;
    link?: string;
  };
}) {
  return (
    <div className="relative flex min-h-[210px] items-center overflow-hidden px-7 py-10 sm:min-h-[250px] sm:px-12">

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

      <div className="absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-red-500/[0.06] blur-3xl" />

      <div className="relative z-10 max-w-xl">

        <p className="mb-2 text-xs font-bold tracking-[0.25em] text-red-500">
          7BOB
        </p>

        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          {banner.title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
          {banner.text}
        </p>

        <p className="mt-5 text-xs font-semibold text-white/35">
          {banner.small}
        </p>

      </div>

    </div>
  );
}

function MenuLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="mt-2 flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold text-white/70 transition hover:bg-white/[0.04] hover:text-white"
    >
      <span>{label}</span>
      <span className="text-white/25">‹</span>
    </Link>
  );
}
