import { AUTOMATION_ICONS, AUTOMATION_CALLOUTS } from "../data/content";

export default function Automation() {
  return (
    <section
      className="sticky top-0 z-0 overflow-hidden py-[clamp(56px,9vw,130px)]"
      aria-label="Secure automation engineered for industry"
    >
      {/* Background: radial red glow fading to black, plus faint concentric rings */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 45% 55%, rgba(157,26,32,0.55) 0%, rgba(60,10,12,0.35) 32%, transparent 62%), #000",
        }}
      />
      <svg
        className="pointer-events-none absolute top-1/2 left-[42%] -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-20"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {[40, 60, 80, 100].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#ffffff" strokeWidth="0.3" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-[clamp(20px,6vw,100px)]">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="m-0 mb-4 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-[0.9px] text-white">
            Secure Automation.
            <br />
            Engineered for Industry.
          </h2>
          <p className="m-0 font-[family-name:var(--font-body)] text-base tracking-[0.48px] text-white/85">
            Where Engineering Meets Intelligent Execution
          </p>
        </div>

        {/* Desktop: floating diagram. Hidden below lg, replaced by stacked list. */}
        <div className="relative mx-auto hidden aspect-[2170/850] w-full max-w-[1400px] lg:block">
          {/* Center logo hub */}
          <div className="absolute top-1/2 left-1/2 z-20 aspect-square w-[16%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_0_60px_rgba(207,38,43,0.5)]">
            <img
              src="/img/logo-mark.svg"
              alt="ProTechX Systems"
              className="h-full w-full scale-75 object-contain"
            />
          </div>

          {/* Floating circular icons */}
          {AUTOMATION_ICONS.map((icon) => (
            <div
              key={icon.image}
              className={`absolute z-10 aspect-square overflow-hidden rounded-full border border-white/10 shadow-[0_0_30px_rgba(207,38,43,0.35)] ${icon.position} ${icon.size}`}
            >
              <img src={icon.image} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}

          {/* Pill-shaped caption callouts */}
          {AUTOMATION_CALLOUTS.map((callout) => (
            <div
              key={callout.text}
              className={`absolute z-10 rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-sm ${callout.position}`}
            >
              <p
                className={`m-0 font-[family-name:var(--font-body)] text-sm leading-[1.5] tracking-[0.36px] text-white/90 ${
                  callout.align === "center" ? "text-center" : "text-left"
                }`}
              >
                {callout.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: simple stacked fallback */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          <div className="aspect-square w-[42%] max-w-[220px] overflow-hidden rounded-full bg-white shadow-[0_0_50px_rgba(207,38,43,0.5)]">
            <img
              src="/img/logo-mark.svg"
              alt="ProTechX Systems"
              className="h-full w-full scale-75 object-contain"
            />
          </div>

          <ul className="m-0 flex w-full max-w-[520px] list-none flex-col gap-4 p-0">
            {AUTOMATION_CALLOUTS.map((callout) => (
              <li
                key={callout.text}
                className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center"
              >
                <p className="m-0 font-[family-name:var(--font-body)] text-sm leading-[1.5] tracking-[0.36px] text-white/90">
                  {callout.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}