import { AUTOMATION_PAIRS, AUTOMATION_SOLO1_CALLOUT, AUTOMATION_SOLO2_CALLOUT } from "../data/content";

// Shared transition classes for anything that moves between rest/hover positions.
const MOVE_TRANSITION = "transition-[top,left] duration-700 ease-in-out";

// CSS custom properties used for the rest/hover position swap.
// TypeScript's CSSProperties type doesn't know about custom props by default,
// so this extends it to allow "--rest-top" etc. without a cast to `any`.
type PositionVars = React.CSSProperties & {
  "--rest-top"?: string;
  "--rest-left"?: string;
  "--hover-top"?: string;
  "--hover-left"?: string;
};

export default function Automation() {
  return (
    <section
      className="sticky top-0 z-0 overflow-hidden py-[clamp(56px,9vw,100px)]"
      aria-label="Secure automation engineered for industry"
    >
      {/* Background image — static, fills the section */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/img/automations/automation_bg.png"
        alt=""
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10" />

      <div className="relative mx-auto max-w-[1400px] px-[clamp(20px,6vw,100px)]">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="m-0 mb-4 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] leading-12 font-bold tracking-[0.9px] text-white">
            Secure Automation.
            <br />
            Engineered for Industry.
          </h2>
          <p className="m-0 font-[family-name:var(--font-body)] text-base tracking-[0.48px] text-white/85">
            Where Engineering Meets Intelligent Execution
          </p>
        </div>

        {/* Desktop: floating diagram. Hovering anywhere inside converges the
            scattered icon/callout pairs into their orbit positions. */}
        <div className="group relative mx-auto hidden aspect-[2170/850] w-full max-w-[1400px] lg:block">
          {/* Center logo hub — fixed, never moves */}
          <div className="absolute top-1/3 left-1/2 z-20 aspect-square w-[16%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_0_60px_rgba(207,38,43,0.5)]">
            <img
              src="/img/automations/logo-mark.svg"
              alt="ProTechX Systems"
              className="h-full w-full scale-75 object-contain"
            />
          </div>

          {/* Icon + callout pairs — each converges from its rest position to
              its hover position as one unit when the diagram is hovered. */}
          {AUTOMATION_PAIRS.map((pair) => (
            <div key={pair.text}>
              {/* Icon */}
              <div
                className={`absolute z-10 aspect-square -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/10 shadow-[0_0_30px_rgba(207,38,43,0.35)] ${pair.iconSize} ${MOVE_TRANSITION}`}
                style={
                  {
                    "--rest-top": pair.iconRest.top,
                    "--rest-left": pair.iconRest.left,
                    "--hover-top": pair.iconHover.top,
                    "--hover-left": pair.iconHover.left,
                    top: "var(--rest-top)",
                    left: "var(--rest-left)",
                  } as PositionVars
                }
                data-pair-icon
              >
                <img src={pair.icon} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>

              {/* Callout — width is explicit per item via pair.textWidth */}
              <div
                className={`absolute z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-4 text-center backdrop-blur-sm ${MOVE_TRANSITION}`}
                style={
                  {
                    "--rest-top": pair.textRest.top,
                    "--rest-left": pair.textRest.left,
                    "--hover-top": pair.textHover.top,
                    "--hover-left": pair.textHover.left,
                    top: "var(--rest-top)",
                    left: "var(--rest-left)",
                    width: pair.textWidth,
                  } as PositionVars
                }
                data-pair-text
              >
                <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
                  {pair.text}
                </p>
              </div>
            </div>
          ))}

          {/* Solo callout — small travel, no paired icon, own width */}
          <div
            className={`absolute z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-4 text-center backdrop-blur-sm ${MOVE_TRANSITION}`}
            style={
              {
                "--rest-top": AUTOMATION_SOLO1_CALLOUT.rest.top,
                "--rest-left": AUTOMATION_SOLO1_CALLOUT.rest.left,
                "--hover-top": AUTOMATION_SOLO1_CALLOUT.hover.top,
                "--hover-left": AUTOMATION_SOLO1_CALLOUT.hover.left,
                top: "var(--rest-top)",
                left: "var(--rest-left)",
                width: AUTOMATION_SOLO1_CALLOUT.textWidth,
              } as PositionVars
            }
            data-pair-text
          >
            <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
              {AUTOMATION_SOLO1_CALLOUT.text}
            </p>
          </div>

          {/* Static callout — always in the same spot, never animates, own width */}
          <div
            className={`absolute z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-4 text-center backdrop-blur-sm ${MOVE_TRANSITION}`}
            style={
              {
                "--rest-top": AUTOMATION_SOLO2_CALLOUT.rest.top,
                "--rest-left": AUTOMATION_SOLO2_CALLOUT.rest.left,
                "--hover-top": AUTOMATION_SOLO2_CALLOUT.hover.top,
                "--hover-left": AUTOMATION_SOLO2_CALLOUT.hover.left,
                top: "var(--rest-top)",
                left: "var(--rest-left)",
                width: AUTOMATION_SOLO2_CALLOUT.textWidth,
              } as PositionVars
            }
            data-pair-text
          >
            <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
              {AUTOMATION_SOLO2_CALLOUT.text}
            </p>
          </div>

          {/* Hover-triggered position overrides, scoped to this diagram instance */}
          <style>{`
            .group:hover [data-pair-icon],
            .group:hover [data-pair-text] {
              top: var(--hover-top) !important;
              left: var(--hover-left) !important;
            }
          `}</style>
        </div>

        {/* Mobile / tablet: simple stacked fallback */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          <div className="aspect-square w-[42%] max-w-[220px] overflow-hidden rounded-full bg-white shadow-[0_0_50px_rgba(207,38,43,0.5)]">
            <img
              src="/img/automations/logo-mark.svg"
              alt="ProTechX Systems"
              className="h-full w-full scale-75 object-contain"
            />
          </div>

          <ul className="m-0 flex w-full max-w-[520px] list-none flex-col gap-4 p-0">
            {AUTOMATION_PAIRS.map((pair) => (
              <li key={pair.text} className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center">
                <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
                  {pair.text}
                </p>
              </li>
            ))}
            <li className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center">
              <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
                {AUTOMATION_SOLO1_CALLOUT.text}
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center">
              <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
                {AUTOMATION_SOLO1_CALLOUT.text}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}