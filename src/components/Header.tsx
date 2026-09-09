import { useEffect, useState } from "react";
import NavPanel from "./NavPanel";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll(); // set correct state on mount (e.g. page loaded already scrolled)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between py-5 px-[clamp(20px,6vw,100px)] transition-colors duration-300 ease-out max-md:px-5 max-md:py-4 ${
          scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        }`}
        id="top"
      >
        <a href="#top" aria-label="ProTechX Systems home">
          <img src="/img/logo.svg" alt="ProTechX Systems" className="h-14 w-auto max-md:h-10" />
        </a>
        <button
          className="border-none bg-transparent p-2"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-panel"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <line
              x1="2" y1="5" x2="20" y2="5"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              style={{
                transformOrigin: "11px 5px",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                transition: "transform 0.2s ease",
              }}
            />
            <line
              x1="2" y1="11" x2="20" y2="11"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              style={{ opacity: menuOpen ? 0 : 1, transition: "opacity 0.15s ease" }}
            />
            <line
              x1="2" y1="17" x2="20" y2="17"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              style={{
                transformOrigin: "11px 17px",
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                transition: "transform 0.2s ease",
              }}
            />
          </svg>
        </button>
      </header>

      <NavPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}