"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowLeft, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/how-it-works", label: "كيف تعمل المنصة" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/75 backdrop-blur-xl transition-all duration-300">
      {/* تقسيم الهيدر إلى Grid بـ 3 أعمدة متساوية */}
      <div className="container-page grid grid-cols-2 md:grid-cols-3 h-20 items-center px-4">
        
        {/* أقصى اليمين: اللوغو + النص */}
        <div className="flex items-center justify-start">
          <Link 
            to="/" 
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95 shrink-0"
          >
            <img 
              src="/The-Emirates.svg" 
              alt="شعار منصة حماية المستهلك" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              // @ts-ignore
              fetchpriority="high"
            />
            {/* النص بجانب اللوغو */}
            <span className="text-sm md:text-base font-bold text-foreground leading-tight tracking-tight border-r border-border/60 pr-3">
              منصة حماية المستهلك
            </span>
          </Link>
        </div>

        {/* المنتصف: القائمة الرئيسية سنتر تماماً */}
        <div className="hidden md:flex justify-center items-center">
          <nav 
            aria-label="التنقل الرئيسي"
            className="flex items-center gap-1 rounded-full border border-border/50 bg-surface/60 p-1.5 shadow-sm backdrop-blur-md"
          >
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative rounded-full px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-background/80 whitespace-nowrap"
                activeProps={{ 
                  className: "bg-background text-primary font-bold shadow-sm ring-1 ring-border/60 text-foreground" 
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* أقصى اليسار: زر تقديم الشكوى (أو زر الموبايل) */}
        <div className="flex items-center justify-end">
          {/* زر سطح المكتب */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/"
              hash="complaint-form"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-6 py-2.5 text-xs lg:text-sm font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/95 hover:shadow-md hover:shadow-primary/20 active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <ShieldCheck className="h-4 w-4 shrink-0 opacity-90 transition-transform group-hover:rotate-12" aria-hidden="true" />
              <span>تقديم شكوى</span>
              <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* زر القائمة للموبايل */}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-border/80 bg-surface text-foreground md:hidden transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5 shrink-0" /> : <Menu className="h-5 w-5 shrink-0" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border/60 bg-background/95 backdrop-blur-2xl", 
          open ? "max-h-[420px] opacity-100 py-5" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="container-page flex flex-col gap-2">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-all hover:bg-secondary/80 hover:text-foreground active:bg-secondary"
              activeProps={{ className: "bg-primary/10 text-primary font-bold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
            </Link>
          ))}

          <div className="pt-2 mt-2 border-t border-border/40">
            <Link
              to="/"
              hash="complaint-form"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition-all active:scale-98"
            >
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>تقديم شكوى الآن</span>
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}