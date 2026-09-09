interface LoaderProps {
  visible: boolean;
}

export default function Loader({ visible }: LoaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-700 ease-out ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="status"
      aria-live="polite"
      aria-busy={visible}
    >
      <img
        src="/img/logo.svg"
        alt="ProTechX Systems"
        className="h-16 w-auto animate-pulse max-md:h-12"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}