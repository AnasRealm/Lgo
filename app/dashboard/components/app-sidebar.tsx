"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Infinity,
  LayoutGrid,
  Users,
  CreditCard,
  GraduationCap,
  HelpCircle,
  Award,
  Building2,
  BarChart3,
  Radio,
  FileText,
  Settings,
  X,
} from "lucide-react";

import { Sidebar } from "@/app/dashboard/components/sidebar";
import Image from "next/image";

const navData = [
  // ... (نفس بيانات navData بدون أي تغيير)
  {
    title: "General",
    icon: LayoutGrid,
    subNav: [
      { title: "Dashboard", url: "/dashboard" },
      { title: "Announcements", url: "/announcements" },
      { title: "Instructors", url: "/instructors" },
      { title: "Program Team", url: "/program-team" },
      { title: "Success Stories", url: "/success-stories" },
      { title: "Hall of Fame", url: "/hall-of-fame" },
      { title: "FAQ", url: "/faq" },
      { title: "Calendar", url: "/calendar" },
      { title: "Messages", url: "/messages" },
      { title: "Banners", url: "/banners" },
      { title: "Accreditations", url: "/accreditations" },
    ],
  },
  {
    title: "HR",
    icon: Users,
    subNav: [
      { title: "Employees", url: "/hr/employees" },
      { title: "Attendance", url: "/hr/attendance" },
      { title: "Payroll", url: "/hr/payroll" },
    ],
  },
  {
    title: "Finance",
    icon: CreditCard,
    subNav: [
      { title: "Invoices", url: "/finance/invoices" },
      { title: "Expenses", url: "/finance/expenses" },
    ],
  },
  {
    title: "Programs",
    icon: GraduationCap,
    subNav: [
      { title: "One-Day Courses", url: "/programs/one-day-courses" },
      { title: "Certificates", url: "/programs/certificates" },
      { title: "Courses", url: "/programs/courses" },
      { title: "Units", url: "/programs/units" },
      { title: "Topics", url: "/programs/topics" },
      { title: "Video Uploads", url: "/programs/video-uploads" },
      { title: "Book Uploads", url: "/programs/book-uploads" },
    ],
  },
  {
    title: "Questions",
    icon: HelpCircle,
    subNav: [{ title: "All Questions", url: "/questions" }],
  },
  {
    title: "Companies",
    icon: Building2,
    subNav: [{ title: "Company List", url: "/companies" }],
  },
  {
    title: "Reports",
    icon: BarChart3,
    subNav: [{ title: "Analytics", url: "/reports" }],
  },
  {
    title: "Content Bro",
    icon: Radio,
    subNav: [{ title: "Manage Content", url: "/content-bro" }],
  },
  {
    title: "Exams",
    icon: FileText,
    subNav: [{ title: "All Exams", url: "/exams" }],
  },
  {
    title: "Settings",
    icon: Settings,
    subNav: [{ title: "General Settings", url: "/settings" }],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  // 1. جعلنا القيمة تقبل null في حال كانت القائمة مغلقة
  const [activeCategory, setActiveCategory] = useState<string | null>(
    "General",
  );

  const currentCategoryData = navData.find(
    (item) => item.title === activeCategory,
  );

  return (
    <Sidebar
      className="border-r-0 transition-all duration-300 ease-in-out" // أضفنا حركة ناعمة عند الإغلاق
      style={
        {
          // 2. العرض يتغير ديناميكياً: 320 إذا كانت مفتوحة، و 84 إذا كانت مغلقة
          "--sidebar-width": activeCategory ? "320px" : "84px",
        } as React.CSSProperties
      }
    >
      <div className="flex h-full w-full flex-row">
        {/* الشريط الجانبي الرئيسي (الداكن) */}
        <div className="w-[84px] min-w-[84px] bg-[#0F172A] flex flex-col items-center py-5 h-full border-r border-slate-800 z-10">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2 overflow-y-auto w-full px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {navData.map((item) => {
              const isActiveCategory = activeCategory === item.title;
              return (
                <button
                  key={item.title}
                  onClick={() => {
                    // إذا ضغط على نفس القسم وهو مفتوح، يتم إغلاقه. وإلا يفتح القسم الجديد
                    setActiveCategory(isActiveCategory ? null : item.title);
                  }}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-lg py-2 transition-colors ${
                    isActiveCategory
                      ? "text-blue-500"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div
                    className={`p-1.5 rounded-lg ${isActiveCategory ? "bg-slate-800/60" : ""}`}
                  >
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-medium leading-none">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
            AD
          </div>
        </div>

        {/* 3. الشريط الجانبي الفرعي (الفاتح) - يظهر فقط إذا كان activeCategory ليس null */}
        {activeCategory && (
          <div className="flex flex-1 w-[236px] flex-col bg-white h-full border-r border-slate-200">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <span className="font-semibold text-sm text-slate-900">
                {currentCategoryData?.title}
              </span>
              {/* 4. تفعيل زر الإغلاق */}
              <button
                onClick={() => setActiveCategory(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="px-5 text-[11px] font-semibold text-slate-400 mb-3 tracking-wider">
                MENU
              </div>
              <ul className="flex flex-col gap-1">
                {currentCategoryData?.subNav.map((item) => {
                  const isItemActive = pathname === item.url;

                  return (
                    <li key={item.title}>
                      <Link
                        href={item.url}
                        className={`flex items-center mx-3 px-3 py-2 text-sm transition-colors rounded-lg ${
                          isItemActive
                            ? "bg-blue-50 text-blue-600 font-medium relative overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-600"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Sidebar>
  );
}
