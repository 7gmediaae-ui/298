"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  FileCheck2, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle,
  FileText,
  Clock
} from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      dir="rtl"
      aria-label="الرئيسية - منصة حماية المستهلك"
      className="relative py-16 md:py-24 border-b border-border bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/ff.jpg')" }}
    >
      {/* تدرج لوني ذكي يُبرز نصوص العناوين ويحافظ على تفاصيل خلفية الصورة */}
      <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/65 to-background/30 pointer-events-none" />

      <div className="container-page relative z-10">
        
        {/* الجزء العلوي: الوسام + العنوان + الوصف */}
        <div className="max-w-3xl">
          
          {/* شارة توثيق زجاجية */}
          {/* <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-lg bg-card/80 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary border border-border/80 backdrop-blur-md shadow-xs"
          >
            <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
            <span>المنصة المعتمدة وحاضنة الحقوق</span>
          </motion.div> */}

          {/* H1 العنوان الرئيسي */}
          <motion.h1
            {...fadeUp(0.08)}
            className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.2] drop-shadow-xs"
          >
            منصة حماية المستهلك <br />
            <span className="text-accent font-normal">لرفع وتقديم شكاوى المستهلك</span>
          </motion.h1>

          {/* النص الفرعي */}
          <motion.p
            {...fadeUp(0.16)}
            className="mt-5 text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl font-medium"
          >
            منصة رقمية لتقديم شكاوى المستهلكين وملاحظاتهم بسهولة، مع تنظيم بيانات الشكوى وتسهيل متابعة الطلب من مكان واحد.
          </motion.p>
        </div>

        {/* الجزء الأوسط: زر تقديم الشكوى */}
        <motion.div
          {...fadeUp(0.24)}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#complaint-form"
            onClick={onPrimaryClick}
            className="group flex items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-card transition-all hover:bg-slate-navy/90 hover:shadow-glow active:scale-95"
          >
            <FileCheck2 className="h-5 w-5 text-accent" />
            <span>تقديم شكوى جديدة</span>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </motion.div>

        {/* الجزء السفلي: 3 بطاقات معلومات أفقية بخلفية زجاجية أنيقة */}
        <motion.div
          {...fadeUp(0.32)}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl"
        >
          <div className="rounded-xl bg-card/85 backdrop-blur-md p-5 border border-border/80 shadow-soft flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="rounded-lg bg-primary/10 p-2.5 text-primary shrink-0 border border-primary/10">
              <FileText className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary">تأطير الشكوى</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                تنظيم البيانات والمرفقات وتجهيزها للعرض الفوري.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-card/85 backdrop-blur-md p-5 border border-border/80 shadow-soft flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="rounded-lg bg-primary/10 p-2.5 text-primary shrink-0 border border-primary/10">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary">متابعة لحظية</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                معرفة مرحلة الشكوى والتحديثات عبر رقم الطلب.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-card/85 backdrop-blur-md p-5 border border-border shadow-soft flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="rounded-lg bg-primary/10 p-2.5 text-primary shrink-0 border border-primary/10">
              <CheckCircle className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary">معالجة عادلة</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                ضمان إيصال ملاحظاتك للجهات المختصة بحيادية.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}