import { faqSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/JsonLd";

type FaqItem = {
  q: string;
  a: string;
};

export function Faq({ items, title = "Perguntas frequentes" }: { items: FaqItem[]; title?: string }) {
  return (
    <div className="space-y-5">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700/80">Perguntas</p>
          <h3 className="mt-2 text-3xl font-semibold text-brand-900">{title}</h3>
        </div>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <details key={`${item.q}-${index}`} className={cn("group overflow-hidden rounded-2xl border border-[#e8d7c4] bg-white p-4 shadow-soft", "open:border-brand-900/30 open:bg-cream")}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-medium text-brand-900 marker:content-none">
              <span>{item.q}</span>
              <span aria-hidden="true" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900/5 text-lg text-brand-900 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(items)} />
    </div>
  );
}
