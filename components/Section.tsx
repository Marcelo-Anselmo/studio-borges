import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, className, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700/80">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl font-semibold text-brand-900 md:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
