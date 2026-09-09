import { DIAGRAM_NODES } from "../data/content";

// Percent-based positions within the diagram container.
// Index order matches DIAGRAM_NODES: [topLeft, topRight, midLeft, midRight, bottomLeft, bottomRight]
const NODE_Y = [27, 27, 53, 53, 79, 79];
const NODE_SIDE: ("left" | "right")[] = ["left", "right", "left", "right", "left", "right"];

function InfoBadge({ tooltip, side }: { tooltip: string; side: "left" | "right" }) {
  return (
    <div className="group absolute -top-2 -right-2 z-10">
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-full border-none bg-white text-[11px] font-bold text-black shadow-md"
        aria-label="More information"
      >
        i
      </button>

      <div
        role="tooltip"
        className={`pointer-events-none absolute top-1/2 z-20 w-[200px] -translate-y-1/2 rounded-lg border border-white/10 bg-[#EDEDED] p-3 text-left text-xs leading-[19px] font-light tracking-[0.36px] text-black opacity-0 shadow-xl transition-[opacity,transform] duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-100 ${
          side === "left"
            ? "left-full ml-3 origin-left group-hover:rotate-0 group-focus-within:rotate-0"
            : "right-full mr-3 origin-right group-hover:rotate-0 group-focus-within:rotate-0"
        }`}
      >
        {tooltip}
      </div>
    </div>
  );
}

export default function CapabilitiesDiagram() {
  return (
    <section className="relative z-20 bg-black py-[clamp(56px,9vw,130px)]" aria-label="Our capabilities">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,6vw,100px)]">
        <div className="relative mx-auto aspect-[2560/1434] w-full max-w-[1200px]">
          {/* Connector graphics — left and right SVG assets, each anchored to its own half */}
          <img
            src="/img/capabilities/connector-left.svg"
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 left-50 z-0 h-[97%] w-[23%] -translate-y-1/2 object-contain object-left"
          />
          <img
            src="/img/capabilities/connector-right.svg"
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 right-50 z-0 h-[97%] w-[23%] -translate-y-1/2 object-contain object-right"
          />

          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 z-[5] aspect-square w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full">
            <div className="flex h-full w-full items-center justify-center rounded-full">
              <img src="/img/capabilities/black_bg_red_logo.svg" alt="" className="h-full w-auto" />
            </div>
          </div>

          {/* Top caption */}
          <p className="absolute top-[9%] left-1/2 z-10 m-0 -translate-x-1/2 text-center font-[family-name:var(--font-body)] text-sm leading-[26px] font-light tracking-[0.36px] whitespace-nowrap text-white">
            Founder-led
            <br />
            Control
          </p>

          {/* Bottom caption */}
          <p className="absolute bottom-[9%] left-1/2 z-10 m-0 -translate-x-1/2 text-center font-[family-name:var(--font-body)] text-sm leading-[26px] font-light tracking-[0.36px] whitespace-nowrap text-white">
            Single Customer
            <br />
            Contact
          </p>

          {/* Nodes */}
          {DIAGRAM_NODES.map((node, i) => {
            const side = NODE_SIDE[i];
            return (
              <div
                key={node.label}
                className={`absolute z-10 flex w-[90px] -translate-y-1/2 flex-col items-center gap-3 text-center ${
                  side === "left" ? "left-30" : "right-30"
                }`}
                style={{ top: `${NODE_Y[i]}%` }}
              >
                <div className="relative aspect-square w-full rounded-2xl bg-[linear-gradient(160deg,#5a5a5a_0%,#1a1a1a_100%)] p-[20%] shadow-lg">
                  <img src={node.icon} alt="" className="h-full w-full object-contain" />
                  <InfoBadge tooltip={node.tooltip} side={side} />
                </div>
                <span className="font-[family-name:var(--font-body)] text-sm leading-[22px] font-light tracking-[0.36px] whitespace-nowrap text-white max-md:text-xs">
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}