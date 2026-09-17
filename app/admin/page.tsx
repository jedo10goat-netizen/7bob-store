"use client";

import { useState } from "react";

const menu = [
  { id: "dashboard", label: "الرئيسية", icon: "⌂" },
  { id: "products", label: "المنتجات", icon: "▣" },
  { id: "orders", label: "الطلبات", icon: "◷" },
  { id: "users", label: "المستخدمون", icon: "♙" },
  { id: "content", label: "تخصيص المتجر", icon: "✦" },
  { id: "settings", label: "الإعدادات", icon: "⚙" },
];

export default function AdminPage() {
  const [active, setActive] = useState("dashboard");

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#080808] text-white"
    >
      <div className="flex min-h-screen">

        {/* القائمة الجانبية */}
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
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-right transition ${
                  active === item.id
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/10"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
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

        {/* المحتوى */}
        <section className="flex-1">

          {/* الهيدر */}
          <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#0a0a0a] px-5 md:px-8">

            <div>
              <p className="text-xs text-white/35">
                لوحة الإدارة
              </p>

              <h1 className="text-xl font-bold">
                {menu.find((x) => x.id === active)?.label}
              </h1>
            </div>

            <div className="flex items-center gap-3">

              <div className="hidden text-left sm:block">
                <div className="text-sm font-semibold">
                  صاحب المتجر
                </div>
                <div className="text-[11px] text-white/35">
                  Administrator
                </div>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10 text-lg font-black text-red-500">
                7
              </div>

            </div>
          </header>

          <div className="p-5 md:p-8">

            {active === "dashboard" && <Dashboard />}

            {active === "products" && <Products />}

            {active === "orders" && <Orders />}

            {active === "users" && <Users />}

            {active === "content" && <Content />}

            {active === "settings" && <Settings />}

          </div>

        </section>
      </div>
    </main>
  );
}


/* =========================
   الرئيسية
========================= */

function Dashboard() {
  return (
    <div>

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
              text="أضف منتجًا جديدًا للمتجر"
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
  );
}


/* =========================
   المنتجات
========================= */

function Products() {
  return (
    <div>

      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div>
          <p className="mb-2 text-sm text-white/35">
            إدارة المنتجات
          </p>

          <h2 className="text-3xl font-black">
            المنتجات
          </h2>
        </div>

        <button className="rounded-2xl bg-red-500 px-6 py-3 font-bold transition hover:bg-red-600">
          + إضافة منتج
        </button>

      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6">

        <Empty text="لم تتم إضافة منتجات بعد" />

      </div>

    </div>
  );
}


/* =========================
   الطلبات
========================= */

function Orders() {
  return (
    <div>

      <div className="mb-8">
        <p className="mb-2 text-sm text-white/35">
          متابعة المبيعات
        </p>

        <h2 className="text-3xl font-black">
          الطلبات
        </h2>
      </div>

      <Panel title="الطلبات الأخيرة">
        <Empty text="لا توجد طلبات حاليًا" />
      </Panel>

    </div>
  );
}


/* =========================
   المستخدمون
========================= */

function Users() {
  return (
    <div>

      <div className="mb-8">
        <p className="mb-2 text-sm text-white/35">
          إدارة الحسابات
        </p>

        <h2 className="text-3xl font-black">
          المستخدمون
        </h2>
      </div>

      <Panel title="المستخدمون المسجلون">
        <Empty text="لا يوجد مستخدمون حتى الآن" />
      </Panel>

    </div>
  );
}


/* =========================
   تخصيص المتجر
========================= */

function Content() {
  return (
    <div>

      <div className="mb-8">
        <p className="mb-2 text-sm text-white/35">
          تحكم كامل بالمظهر والمحتوى
        </p>

        <h2 className="text-3xl font-black">
          تخصيص المتجر
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <EditBox
          title="اسم المتجر"
          value="7BOB STORE"
        />

        <EditBox
          title="الوصف"
          value="متجرك لشحن الألعاب والخدمات الرقمية"
        />

        <EditBox
          title="عنوان الصفحة الرئيسية"
          value="مرحباً بك"
        />

        <EditBox
          title="النص التعريفي"
          value="شحن سريع • خدمة موثوقة"
        />

      </div>

      <button className="mt-6 rounded-2xl bg-red-500 px-7 py-3 font-bold">
        حفظ التغييرات
      </button>

    </div>
  );
}


/* =========================
   الإعدادات
========================= */

function Settings() {
  return (
    <div>

      <div className="mb-8">
        <p className="mb-2 text-sm text-white/35">
          إعدادات النظام
        </p>

        <h2 className="text-3xl font-black">
          الإعدادات
        </h2>
      </div>

      <div className="space-y-4">

        <Setting
          title="حالة المتجر"
          text="السماح للعملاء باستخدام المتجر"
        />

        <Setting
          title="إشعارات الطلبات"
          text="استقبال تنبيهات عند وصول طلب جديد"
        />

        <Setting
          title="وضع الصيانة"
          text="إيقاف المتجر مؤقتًا للزوار"
        />

      </div>

    </div>
  );
}


/* =========================
   Components
========================= */

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


function Empty({ text }: { text: string }) {
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


function EditBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-5">

      <label className="mb-3 block text-sm text-white/50">
        {title}
      </label>

      <input
        defaultValue={value}
        className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm outline-none transition focus:border-red-500"
      />

    </div>
  );
}


function Setting({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-3xl border border-white/10 bg-[#0d0d0d] p-5">

      <div>
        <div className="font-bold">
          {title}
        </div>

        <div className="mt-1 text-xs text-white/35">
          {text}
        </div>
      </div>

      <div className="h-6 w-11 rounded-full bg-red-500 p-1">
        <div className="h-4 w-4 rounded-full bg-white" />
      </div>

    </div>
  );
}0

