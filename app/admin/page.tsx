"use client";

import AdminGuard from "@/components/AdminGuard";

const menu = [
  { id: "dashboard", label: "الرئيسية", icon: "⌂" },
  { id: "products", label: "المنتجات", icon: "▣" },
  { id: "orders", label: "الطلبات", icon: "◷" },
  { id: "users", label: "المستخدمون", icon: "♙" },
  { id: "content", label: "تخصيص المتجر", icon: "✦" },
  { id: "settings", label: "الإعدادات", icon: "⚙" },
];

export default function AdminPage() {
  return (
    <AdminGuard>
      <AdminPanel />
    </AdminGuard>
  );
}

function AdminPanel() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#080808] text-white"
    >
      <div className="flex min-h-screen">

        <aside className="hidden w-64 border-l border-white/10 bg-[#0d0d0d] p-5 md:block">

          <div className="mb-10">
            <div className="text-2xl font-black tracking-tight">
              <span className="text-red-500">7</span>BOB
            </div>

            <div className="text-[10px] tracking-[0.35em] text-white/35">
              STORE ADMIN
            </div>
          </div>

          <nav className="space-y-2">
            {menu.map((item) => (
              <button
                key={item.id}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-right text-white/55 transition hover:bg-white/5 hover:text-white"
              >
                <span className="w-6 text-center text-lg">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

            <div className="mb-2 text-xs text-white/35">
              حالة المتجر
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-sm">
                المتجر يعمل
              </span>
            </div>

          </div>

        </aside>

        <section className="flex-1">

          <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#0a0a0a] px-5 md:px-8">

            <div>
              <p className="text-xs text-white/35">
                لوحة الإدارة
              </p>

              <h1 className="text-xl font-bold">
                الرئيسية
              </h1>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10 text-lg font-black text-red-500">
              7
            </div>

          </header>

          <div className="p-5 md:p-8">

            <div className="mb-8">
              <p className="mb-2 text-sm text-white/35">
                مرحباً بك
              </p>

              <h2 className="text-3xl font-black">
                نظرة عامة على المتجر
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <Stat
                title="إجمالي الطلبات"
                value="0"
                detail="جميع الطلبات"
              />

              <Stat
                title="طلبات قيد التنفيذ"
                value="0"
                detail="تحتاج متابعة"
              />

              <Stat
                title="المنتجات"
                value="0"
                detail="منتج نشط"
              />

              <Stat
                title="المستخدمون"
                value="0"
                detail="حساب مسجل"
              />

            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">

              <Panel title="آخر الطلبات">
                <Empty text="لا توجد طلبات حتى الآن" />
              </Panel>

              <Panel title="إجراءات سريعة">

                <div className="grid gap-3 sm:grid-cols-2">

                  <Quick
                    title="إضافة منتج"
                    text="أضف منتجاً جديداً للمتجر"
                  />

                  <Quick
                    title="تخصيص المتجر"
                    text="عدّل محتوى الصفحة الرئيسية"
                  />

                  <Quick
                    title="مراجعة الطلبات"
                    text="تابع الطلبات الجديدة"
                  />

                  <Quick
                    title="إعدادات المتجر"
                    text="إدارة إعدادات النظام"
                  />

                </div>

              </Panel>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

function Stat({
  title,
  value,
  detail,
}: {
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-5">

      <div className="mb-5 text-sm text-white/40">
        {title}
      </div>

      <div className="text-4xl font-black">
        {value}
      </div>

      <div className="mt-2 text-xs text-white/30">
        {detail}
      </div>

    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-5">

      <h3 className="mb-5 text-lg font-bold">
        {title}
      </h3>

      {children}

    </div>
  );
}

function Empty({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-white/10 text-sm text-white/30">
      {text}
    </div>
  );
}

function Quick({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <button className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-right transition hover:border-red-500/30 hover:bg-red-500/[0.03]">

      <div className="mb-2 font-bold">
        {title}
      </div>

      <div className="text-xs leading-5 text-white/35">
        {text}
      </div>

    </button>
  );
}
