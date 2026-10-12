import { AUTOMATION_PAIRS, AUTOMATION_SOLO1_CALLOUT, AUTOMATION_SOLO2_CALLOUT } from "../data/content";

const MOVE_TRANSITION = "transition-[top,left,width] duration-700 ease-in-out";

type PositionVars = React.CSSProperties & {
  "--rest-top"?: string;
  "--rest-left"?: string;
  "--hover-top"?: string;
  "--hover-left"?: string;
  "--rest-top-md"?: string;
  "--rest-left-md"?: string;
  "--hover-top-md"?: string;
  "--hover-left-md"?: string;
};

export default function Automation() {
  return (
    <section
  className="relative z-0 overflow-hidden py-[clamp(56px,9vw,100px)]"
  aria-label="Secure automation engineered for industry"
>
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/img/automations/automation_bg.webp"
        alt=""
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10" />

      <div className="relative mx-auto max-w-[1400px] px-[clamp(20px,6vw,100px)]">
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

        {/* Desktop / tablet: floating diagram with hover-driven convergence.
            Visible from md up. */}
        <div className="group relative mx-auto hidden aspect-[2170/850] w-full max-w-[1400px] md:block">
          <div className="absolute top-1/3 left-1/2 z-20 aspect-square w-[16%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_0_60px_rgba(207,38,43,0.5)]">
            <img
              src="/img/automations/logo-mark.png"
              alt="ProTechX Systems"
              className="h-full w-full scale-75 object-contain"
            />
          </div>

          {AUTOMATION_PAIRS.map((pair) => (

            <div key={pair.text}>
              <div
                className={`absolute z-10 aspect-square -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/10 shadow-[0_0_30px_rgba(207,38,43,0.35)] ${pair.iconSize} ${MOVE_TRANSITION}`}
                style={
                  {
                    "--rest-top": pair.iconRest.top,
                    "--rest-left": pair.iconRest.left,
                    "--hover-top": pair.iconHover.top,
                    "--hover-left": pair.iconHover.left,
                    "--rest-top-md": pair.iconRestMd?.top ?? pair.iconRest.top,
                    "--rest-left-md": pair.iconRestMd?.left ?? pair.iconRest.left,
                    "--hover-top-md": pair.iconHoverMd?.top ?? pair.iconHover.top,
                    "--hover-left-md": pair.iconHoverMd?.left ?? pair.iconHover.left,
                    top: "var(--rest-top)",
                    left: "var(--rest-left)",
                  } as PositionVars
                }
                data-pair-icon
              >
                <img src={pair.icon} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>

              <div
                className={`glass-pill absolute z-10 px-6 py-4 text-center  ${MOVE_TRANSITION}`}
                style={
                  {
                    "--rest-top": pair.textRest.top,
                    "--rest-left": pair.textRest.left,
                    "--hover-top": pair.textHover.top,
                    "--hover-left": pair.textHover.left,
                    "--rest-top-md": pair.textRestMd?.top ?? pair.textRest.top,
                    "--rest-left-md": pair.textRestMd?.left ?? pair.textRest.left,
                    "--hover-top-md": pair.textHoverMd?.top ?? pair.textHover.top,
                    "--hover-left-md": pair.textHoverMd?.left ?? pair.textHover.left,
                    top: "var(--rest-top)",
                    left: "var(--rest-left)",
                    width: pair.textWidth,
                  } as PositionVars
                }
                data-pair-text
              >
                <p className="m-0 font-[family-name:var(--font-body)]  text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
                  {pair.text}
                </p>
              </div>
            </div>

          ))}

          {[AUTOMATION_SOLO1_CALLOUT, AUTOMATION_SOLO2_CALLOUT].map((solo) => (
            <div
              key={solo.text}
              className={`glass-pill absolute z-10 px-6 py-4 text-center ${MOVE_TRANSITION}`}
              style={
                {
                  "--rest-top": solo.rest.top,
                  "--rest-left": solo.rest.left,
                  "--hover-top": solo.hover.top,
                  "--hover-left": solo.hover.left,
                  "--rest-top-md": solo.restMd?.top ?? solo.rest.top,
                  "--rest-left-md": solo.restMd?.left ?? solo.rest.left,
                  "--hover-top-md": solo.hoverMd?.top ?? solo.hover.top,
                  "--hover-left-md": solo.hoverMd?.left ?? solo.hover.left,
                  top: "var(--rest-top)",
                  left: "var(--rest-left)",
                  width: solo.textWidth,
                } as PositionVars
              }
              data-pair-text
            >
              <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
                {solo.text}
              </p>
            </div>
          ))}

          {/* Position rules: default (desktop, lg+) uses --rest-* / --hover-*;
              tablet (md to just below lg) switches to the -md variants. */}
          <style>{`
            [data-pair-icon], [data-pair-text] {
              top: var(--rest-top) !important;
              left: var(--rest-left) !important;
            }
            .group:hover [data-pair-icon],
            .group:hover [data-pair-text] {
              top: var(--hover-top) !important;
              left: var(--hover-left) !important;
            }

            @media (max-width: 1023px) {
              [data-pair-icon], [data-pair-text] {
                top: var(--rest-top-md) !important;
                left: var(--rest-left-md) !important;
              }
              .group:hover [data-pair-icon],
              .group:hover [data-pair-text] {
                top: var(--hover-top-md) !important;
                left: var(--hover-left-md) !important;
              }
            }
          `}</style>
        </div>

        {/* Mobile: same absolute-positioned diagram structure as desktop,
            but every element sits at one static position — no hover state,
            no transition, nothing animates. */}
        <div className="relative mx-auto block w-full md:hidden" style={{ minHeight: "760px" }}>
          <div className="absolute  top-[25%] left-1/2 -z-0 aspect-square w-[110px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_0_60px_rgba(207,38,43,0.5)]">
            <img
              src="/img/automations/logo-mark.png"
              alt="ProTechX Systems"
              className="h-full w-full scale-75 object-contain"
            />
          </div>

          {AUTOMATION_PAIRS.map((pair) => (
            <div key={pair.text}>
              {/* Icon — static position, no transition */}
              <div
                className={`absolute z-10 aspect-square overflow-hidden rounded-full border border-white/10 shadow-[0_0_30px_rgba(207,38,43,0.35)] ${pair.iconSizeMobile}`}
                style={{ top: pair.iconMobile.top, left: pair.iconMobile.left }}
              >
                <img src={pair.icon} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>

              {/* Callout — static position, no transition */}
              <div className="glass-pill absolute z-10 px-6 py-4 text-center"
  style={{ top: pair.textMobile.top, left: pair.textMobile.left, width: pair.textWidthMobile }}
>
  <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.6] font-light tracking-[0.36px] text-white">
    {pair.text}
  </p>
</div>
              
            </div>
          ))}

          {/* Solo callouts — static, text-only, same as desktop */}
          <div
            className="glass-pill absolute z-10 px-6 py-4 text-center"
            style={{
              top: AUTOMATION_SOLO1_CALLOUT.mobile.top,
              left: AUTOMATION_SOLO1_CALLOUT.mobile.left,
              width: AUTOMATION_SOLO1_CALLOUT.textWidthMobile,
            }}
          >
            <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
              {AUTOMATION_SOLO1_CALLOUT.text}
            </p>
          </div>

          <div
            className="glass-pill absolute z-10 px-6 py-4 text-center"
            style={{
              top: AUTOMATION_SOLO2_CALLOUT.mobile.top,
              left: AUTOMATION_SOLO2_CALLOUT.mobile.left,
              width: AUTOMATION_SOLO2_CALLOUT.textWidthMobile,
            }}
          >
            <p className="m-0 font-[family-name:var(--font-body)] text-[12px] leading-[1.5] font-light tracking-[0.36px] text-white/90">
              {AUTOMATION_SOLO2_CALLOUT.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}