import { useEffect, useRef, useState } from "react";
import { DIAGRAM_NODES } from "../data/content";

// Percent-based positions within the diagram container.
// Index order matches DIAGRAM_NODES: [topLeft, topRight, midLeft, midRight, bottomLeft, bottomRight]
const NODE_Y = [27, 27, 53, 53, 79, 79];
const NODE_SIDE: ("left" | "right")[] = ["left", "right", "left", "right", "left", "right"];

// Node indices per side, top → bottom.
// LEFT_INDICES  → [0, 2, 4] (Automation, Validation, Support)
// RIGHT_INDICES → [1, 3, 5] (OT Security, Commissioning, Coordination)
const NODE_INDICES = DIAGRAM_NODES.map((_, i) => i);
const LEFT_INDICES = NODE_INDICES.filter((i) => NODE_SIDE[i] === "left");
const RIGHT_INDICES = NODE_INDICES.filter((i) => NODE_SIDE[i] === "right");

// Mobile: "left" nodes become the top row, "right" nodes become the bottom row.
const MOBILE_TOP_NODES = LEFT_INDICES.map((i) => DIAGRAM_NODES[i]);
const MOBILE_BOTTOM_NODES = RIGHT_INDICES.map((i) => DIAGRAM_NODES[i]);
const MOBILE_COL_X = [16, 50, 84]; // left, middle, right column positions (%)
const MOBILE_COL_ALIGN: ("start" | "center" | "end")[] = ["start", "center", "end"];

// Entrance timing (seconds).
// 1. The center circle fades in first.
// 2. After a pause, each icon appears TOGETHER with its own connector line,
//    one pair after another: left column top→bottom, then right column top→bottom.
// 3. The captions come in last.
const CIRCLE_DELAY = 0;
const PAIRS_START_DELAY = 1.2; // pause between the circle and the first icon/line pair
const PAIR_STEP = 0.6; // gap between one icon/line pair and the next

const APPEARANCE_ORDER = [...LEFT_INDICES, ...RIGHT_INDICES]; // [0, 2, 4, 1, 3, 5]

// Delay for a node AND its connector line — they share the same value.
const nodeDelay = (nodeIndex: number) =>
  PAIRS_START_DELAY + APPEARANCE_ORDER.indexOf(nodeIndex) * PAIR_STEP;

const CAPTIONS_DELAY = PAIRS_START_DELAY + APPEARANCE_ORDER.length * PAIR_STEP;

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function InfoBadge({
  tooltip,
  desktopSide,
  mobileDirection,
  mobileAlign,
}: {
  tooltip: string;
  desktopSide: "left" | "right";
  mobileDirection: "up" | "down";
  mobileAlign: "start" | "center" | "end";
}) {
  return (
    <>
      <button
        type="button"
        className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border-none bg-white text-[11px] font-bold text-black shadow-md"
        aria-label="More information"
      >
        i
      </button>

      <div
        role="tooltip"
        className={`pointer-events-none absolute z-20 w-[160px] rounded-lg border border-white/10 bg-[#EDEDED] p-3 text-left text-xs leading-[19px] font-light tracking-[0.36px] text-black opacity-0 shadow-xl transition-[opacity,transform] duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-100 md:w-[220px] md:top-1/2 md:bottom-auto md:mt-0 md:mb-0 md:-translate-y-1/2 ${
          mobileDirection === "up" ? "bottom-full mb-3 origin-bottom" : "top-full mt-3 origin-top"
        } ${
          mobileAlign === "start"
            ? "left-0"
            : mobileAlign === "end"
              ? "right-0"
              : "left-1/2 -translate-x-1/2 md:translate-x-0"
        } ${
          desktopSide === "left"
            ? "md:left-full md:right-auto md:ml-3 md:mr-0 md:origin-left"
            : "md:right-full md:left-auto md:mr-3 md:ml-0 md:origin-right"
        }`}
      >
        {tooltip}
      </div>
    </>
  );
}

export default function CapabilitiesDiagram() {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>();

  // Shared fade-in class: starts invisible/slightly scaled down, animates to
  // full opacity/scale once `inView` flips true. The per-element delay is
  // applied separately via fadeStyle's inline transitionDelay.
  const fadeClass = () =>
    `transition-[opacity,transform] duration-3000 ease-out ${
      inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`;

  const fadeStyle = (delay: number): React.CSSProperties => ({
    transitionDelay: `${delay}s`,
  });

  return (
    <section id="support" className="relative z-20 bg-black py-[clamp(56px,9vw,130px)]" aria-label="Our capabilities">
      <h3 className="mb-1 text-center font-[family-name:var(--font-display)] text-[clamp(24px,3vw,32px)] font-bold tracking-[0.96px] text-white">
        <span className="text-[#cf262b]">One Partner.</span> Complete Engineering Capability.
      </h3>

      {/* ref lives on a wrapper that renders on every breakpoint, so the
          observer always has a real element to measure. */}
      <div ref={sectionRef} className="mx-auto max-w-[1240px] px-[clamp(20px,6vw,100px)]">
        {/* Desktop / tablet — horizontal diagram */}
        <div className="relative mx-auto hidden aspect-[2560/1434] w-full max-w-[1200px] md:block">
          {/* Left connector lines — each shares its delay with the icon it belongs to
              (1 = top node, 2 = middle node, 3 = bottom node) */}
          <img
            src="/img/capabilities/connector-left-1.svg"
            alt=""
            aria-hidden="true"
            className={`absolute top-50 left-50 z-0 h-[97%] w-[23%] -translate-y-1/2 object-contain object-left ${fadeClass()}`}
            style={fadeStyle(nodeDelay(LEFT_INDICES[0]))}
          />
          <img
            src="/img/capabilities/connector-left-2.svg"
            alt=""
            aria-hidden="true"
            className={`absolute top-1/2 left-50 z-0 h-[97%] w-[23%] -translate-y-1/2 object-contain object-left ${fadeClass()}`}
            style={fadeStyle(nodeDelay(LEFT_INDICES[1]))}
          />
          <img
            src="/img/capabilities/connector-left-3.svg"
            alt=""
            aria-hidden="true"
            className={`absolute top-100 left-50 z-0 h-[97%] w-[23%] -translate-y-1/2 object-contain object-left ${fadeClass()}`}
            style={fadeStyle(nodeDelay(LEFT_INDICES[2]))}
          />

          {/* Right connector lines */}
          <img
            src="/img/capabilities/connector-right-1.svg"
            alt=""
            aria-hidden="true"
            className={`absolute top-50 right-50 z-0 h-[97%] w-[23%] -translate-y-1/2 object-contain object-right ${fadeClass()}`}
            style={fadeStyle(nodeDelay(RIGHT_INDICES[0]))}
          />
          <img
            src="/img/capabilities/connector-right-2.svg"
            alt=""
            aria-hidden="true"
            className={`absolute top-1/2 right-50 z-0 h-[97%] w-[23%] -translate-y-1/2 object-contain object-right ${fadeClass()}`}
            style={fadeStyle(nodeDelay(RIGHT_INDICES[1]))}
          />
          <img
            src="/img/capabilities/connector-right-3.svg"
            alt=""
            aria-hidden="true"
            className={`absolute top-100 right-50 z-0 h-[97%] w-[23%] -translate-y-1/2 object-contain object-right ${fadeClass()}`}
            style={fadeStyle(nodeDelay(RIGHT_INDICES[2]))}
          />

          {/* Center circle — fades in first */}
          <div
            className={`absolute top-1/2 left-1/2 z-[5] aspect-square w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full ${fadeClass()}`}
            style={fadeStyle(CIRCLE_DELAY)}
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-full">
              <img
                src="/img/capabilities/logo_bg_dropshadow.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 z-0 h-full w-full animate-[spin_12s_linear_infinite] object-contain"
              />
              <img
                src="/img/capabilities/black_bg_red_logo.png"
                alt=""
                className="relative z-10 h-[85%] w-auto"
              />
            </div>
          </div>

          {/* Top caption */}
          <p
            className={`absolute top-[9%] left-1/2 z-10 m-0 -translate-x-1/2 text-center font-[family-name:var(--font-body)] text-sm leading-[26px] font-light tracking-[0.36px] whitespace-nowrap text-white ${fadeClass()}`}
            style={fadeStyle(CAPTIONS_DELAY)}
          >
            Founder-led
            <br />
            Control
          </p>

          {/* Bottom caption */}
          <p
            className={`absolute bottom-[9%] left-1/2 z-10 m-0 -translate-x-1/2 text-center font-[family-name:var(--font-body)] text-sm leading-[26px] font-light tracking-[0.36px] whitespace-nowrap text-white ${fadeClass()}`}
            style={fadeStyle(CAPTIONS_DELAY)}
          >
            Single Customer
            <br />
            Contact
          </p>

          {/* Nodes — each icon shares its delay with its connector line */}
          {DIAGRAM_NODES.map((node, i) => {
            const side = NODE_SIDE[i];
            return (
<div
  key={node.label}
  className={`absolute z-10 flex w-[90px] -translate-y-1/2 flex-col items-center gap-3 text-center ${
    side === "left" ? "left-30" : "right-30"
  } ${fadeClass()}`}
  style={{ top: `${NODE_Y[i]}%`, ...fadeStyle(nodeDelay(i)) }}
>
  <div className="group relative box-border h-[90px] w-[90px] shrink-0 rounded-2xl bg-[linear-gradient(160deg,#5a5a5a_0%,#1a1a1a_100%)] p-[18px] shadow-lg">
    <img
      src={node.icon}
      alt=""
      className="block h-full w-full object-contain"
    />

    <InfoBadge
      tooltip={node.tooltip}
      desktopSide={side}
      mobileDirection="down"
      mobileAlign="center"
    />
  </div>

  <span className="font-[family-name:var(--font-body)] text-sm leading-[22px] font-light tracking-[0.36px] whitespace-nowrap text-white max-md:text-xs">
    {node.label}
  </span>
</div>
            );
          })}
        </div>

        {/* Mobile — vertical layout: 3 nodes on top, 3 on bottom, captions beside the circle */}
        <div className="relative mx-auto block aspect-[770/1377] w-full max-w-[420px] md:hidden">
          {/* Top connector — rotated 90°, so the "top" line (left-1) lands on the
              RIGHT column and the "bottom" line (left-3) lands on the LEFT column.
              Each line therefore takes the delay of the node in its column. */}
          <div className="absolute inset-x-0 top-25 z-0 h-[180px] overflow-hidden">
            <img
              src="/img/capabilities/connector-left-1.svg"
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 -right-35 m-auto w-[60%] rotate-90 object-contain ${fadeClass()}`}
              style={fadeStyle(nodeDelay(LEFT_INDICES[2]))}
            />
            <img
              src="/img/capabilities/connector-left-2.svg"
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 m-auto w-[60%] rotate-90 object-contain ${fadeClass()}`}
              style={fadeStyle(nodeDelay(LEFT_INDICES[1]))}
            />
            <img
              src="/img/capabilities/connector-left-3.svg"
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 -left-35 m-auto w-[60%] rotate-90 object-contain ${fadeClass()}`}
              style={fadeStyle(nodeDelay(LEFT_INDICES[0]))}
            />
          </div>

          {/* Bottom connector — same idea: right-1 → right column, right-3 → left column */}
          <div className="absolute inset-x-0 bottom-25 z-0 h-[180px] overflow-hidden">
            <img
              src="/img/capabilities/connector-right-3.svg"
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 -left-35 m-auto w-[60%] rotate-90 object-contain ${fadeClass()}`}
              style={fadeStyle(nodeDelay(RIGHT_INDICES[0]))}
            />
            <img
              src="/img/capabilities/connector-right-2.svg"
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 m-auto w-[60%] rotate-90 object-contain ${fadeClass()}`}
              style={fadeStyle(nodeDelay(RIGHT_INDICES[1]))}
            />
            <img
              src="/img/capabilities/connector-right-1.svg"
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 -right-35 m-auto w-[60%] rotate-90 object-contain ${fadeClass()}`}
              style={fadeStyle(nodeDelay(RIGHT_INDICES[2]))}
            />
          </div>

          {/* Center circle */}
          <div
            className={`absolute top-1/2 left-1/2 z-[5] aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full ${fadeClass()}`}
            style={fadeStyle(CIRCLE_DELAY)}
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-full">
              <img
                src="/img/capabilities/logo_bg_dropshadow.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 z-0 h-full w-full animate-[spin_12s_linear_infinite] object-contain"
              />
              <img
                src="/img/capabilities/black_bg_red_logo.png"
                alt=""
                className="relative z-10 h-[80%] w-auto"
              />
            </div>
          </div>

          {/* Left caption */}
          <p
            className={`absolute top-1/2 left-0 z-10 m-0 w-[25%] -translate-y-1/2 text-center font-[family-name:var(--font-body)] text-sm leading-[24px] font-light tracking-[0.36px] text-white ${fadeClass()}`}
            style={fadeStyle(CAPTIONS_DELAY)}
          >
            Founder-led
            <br />
            Control
          </p>

          {/* Right caption */}
          <p
            className={`absolute top-1/2 right-0 z-10 m-0 w-[25%] -translate-y-1/2 text-center font-[family-name:var(--font-body)] text-sm leading-[24px] font-light tracking-[0.36px] text-white ${fadeClass()}`}
            style={fadeStyle(CAPTIONS_DELAY)}
          >
            Single Customer
            <br />
            Contact
          </p>

          {/* Top row */}
          {MOBILE_TOP_NODES.map((node, i) => (
            <div
              key={node.label}
              className={`absolute top-[6%] z-10 flex w-[80px] h-[80px] -translate-x-1/2 flex-col items-center gap-2 text-center ${fadeClass()}`}
              style={{ left: `${MOBILE_COL_X[i]}%`, ...fadeStyle(nodeDelay(LEFT_INDICES[i])) }}
            >
              <span className="font-[family-name:var(--font-body)] text-sm leading-[20px] font-light tracking-[0.36px] whitespace-nowrap text-white">
                {node.label}
              </span>
              <div className="group relative aspect-square w-full rounded-2xl bg-[linear-gradient(160deg,#5a5a5a_0%,#1a1a1a_100%)] p-[20%] shadow-lg">
                <img src={node.icon} alt="" className="h-full w-full object-contain" />
                <InfoBadge
                  tooltip={node.tooltip}
                  desktopSide="left"
                  mobileDirection="up"
                  mobileAlign={MOBILE_COL_ALIGN[i]}
                />
              </div>
            </div>
          ))}

          {/* Bottom row */}
          {MOBILE_BOTTOM_NODES.map((node, i) => (
            <div
              key={node.label}
              className={`absolute bottom-[6%] z-10 flex w-[22%] -translate-x-1/2 flex-col items-center gap-2 text-center ${fadeClass()}`}
              style={{ left: `${MOBILE_COL_X[i]}%`, ...fadeStyle(nodeDelay(RIGHT_INDICES[i])) }}
            >
              <div className="group relative aspect-square w-full rounded-2xl bg-[linear-gradient(160deg,#5a5a5a_0%,#1a1a1a_100%)] p-[20%] shadow-lg">
                <img src={node.icon} alt="" className="h-full w-full object-contain" />
                <InfoBadge
                  tooltip={node.tooltip}
                  desktopSide="right"
                  mobileDirection="down"
                  mobileAlign={MOBILE_COL_ALIGN[i]}
                />
              </div>
              <span className="font-[family-name:var(--font-body)] text-sm leading-[20px] font-light tracking-[0.36px] whitespace-nowrap text-white">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}