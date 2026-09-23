export default function ComingSoon() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 overflow-hidden px-6 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Background — full-bleed cover image */}
      <img
        src="/img/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Dark overlay so text/logo stay legible over the photo */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <img
        src="/img/logo.svg"
        alt="ProTechX Systems"
        className="h-16 w-auto max-md:h-12"
      />

      <div>
        <h1 className="m-0 mb-4 font-[family-name:var(--font-display)] text-[clamp(32px,6vw,64px)] font-bold tracking-[0.9px] text-white">
          Coming <span className="text-[#cf262b]">Soon</span>
        </h1>
        <p className="m-0 font-[family-name:var(--font-body)] text-base tracking-[0.48px] text-white/70 max-md:text-sm">
          We're building something great. Check back shortly.
        </p>
      </div>
    </div>
  );
}