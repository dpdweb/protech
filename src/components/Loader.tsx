interface LoaderProps {
  visible: boolean;
}

export default function Loader({ visible }: LoaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-black transition-opacity duration-700 ease-out ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="status"
      aria-live="polite"
      aria-busy={visible}
    >
      <img
        src="/img/logo.svg"
        alt="ProTechX Systems"
        className="h-16 w-auto max-md:h-12"
      />

      <div className="flex items-center gap-2.5">
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#cf262b] [animation:loader-dot_1.2s_ease-in-out_infinite]"
          style={{ animationDelay: "0s" }}
        />
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#cf262b] [animation:loader-dot_1.2s_ease-in-out_infinite]"
          style={{ animationDelay: "0.2s" }}
        />
        <span
          className="h-2.5 w-2.5 rounded-full bg-[#cf262b] [animation:loader-dot_1.2s_ease-in-out_infinite]"
          style={{ animationDelay: "0.4s" }}
        />
      </div>

      <span className="sr-only">Loading…</span>
    </div>
  );
}