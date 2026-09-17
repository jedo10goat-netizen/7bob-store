export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#090909] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090909]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-6xl items-center justify-between px-5">
          <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xl">
            🛒
          </button>

          <button className="text-center">
            <div className="text-3xl font-black tracking-tight">
              <span className="text-red-500">7</span>
              <span className="text-white">BOB</span>
            </div>
            <div className="text-[10px] font-bold tracking-[0.35em] text-white/45">
              STORE
            </div>
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xl">
            ☰
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-10 pt-12">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-red-950/40 via-[#111] to-[#090909] p-7 shadow-2xl">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              شحن سريع • خدمة موثوقة
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl">
              مرحباً بك في
              <br />
              <span className="text-red-500">7</span>BOB STORE
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/55">
              متجرك لشحن الألعاب والخدمات الرقمية بطريقة سهلة وسريعة.
            </p>

            <button className="mt-8 rounded-2xl bg-red-600 px-7 py-4 font-bold transition hover:bg-red-500">
              استكشف المنتجات
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm text-red-500">7BOB STORE</p>
            <h2 className="mt-1 text-2xl font-black">خدماتنا</h2>
          </div>
          <span className="text-sm text-white/35">اختر الخدمة</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Service title="eFootball" subtitle="شحن العملات" />
          <Service title="المحفظة" subtitle="إدارة رصيدك" />
          <Service title="طلباتي" subtitle="تابع طلباتك" />
          <Service title="حسابي" subtitle="إعدادات الحساب" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6">
          <h2 className="text-2xl font-black">لماذا 7BOB؟</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Feature title="سرعة التنفيذ" text="نعمل على تنفيذ طلبك بأسرع وقت ممكن." />
            <Feature title="واجهة بسيطة" text="تجربة واضحة ومريحة من البداية للنهاية." />
            <Feature title="دعم العملاء" text="يمكنك التواصل معنا عند الحاجة للمساعدة." />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-5 py-8 text-center">
        <div className="text-2xl font-black">
          <span className="text-red-500">7</span>BOB
        </div>
        <p className="mt-2 text-sm text-white/35">
          متجرك الرقمي للألعاب والخدمات
        </p>
        <p className="mt-5 text-xs text-white/20">
          © 2026 7BOB STORE
        </p>
      </footer>
    </main>
  );
}

function Service({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <button className="group rounded-[24px] border border-white/10 bg-white/[0.025] p-5 text-right transition hover:border-red-500/30 hover:bg-red-500/[0.05]">
      <div className="mb-8 h-11 w-11 rounded-2xl bg-red-500/10 ring-1 ring-red-500/20" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-white/40">{subtitle}</p>
    </button>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/20 p-5">
      <div className="mb-4 h-2 w-10 rounded-full bg-red-500" />
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/40">{text}</p>
    </div>
  );
}
