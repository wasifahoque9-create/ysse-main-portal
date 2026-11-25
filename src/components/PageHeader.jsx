
import { Sparkles } from "lucide-react";

function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#073f34]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#07845b]/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[280px] max-w-7xl items-center px-5 py-16 sm:min-h-[320px] sm:px-8 sm:py-20 lg:px-10">
        <div className="max-w-3xl animate-[fadeUp_0.7s_ease-out_both]">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#a8dfb9]/25 bg-[#a8dfb9]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b8e8c5]">
              <Sparkles size={15} />
              {eyebrow}
            </span>
          )}

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70 sm:text-base lg:text-lg">
              {description}
            </p>
          )}

          <div className="mt-8 h-1 w-16 rounded-full bg-[#a8dfb9]" />
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
