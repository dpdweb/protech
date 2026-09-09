import { ChevronLeft } from 'lucide-react';

interface NavPanelProps {
  open: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { label: "Services Overview", href: "#services" },
  { label: "Project Experience", href: "#projects" },
  { label: "Trust & Support", href: "#support" },
  { label: "Contact Us", href: "#contact" },
];

export default function NavPanel({ open, onClose }: NavPanelProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-[150] bg-black/60 transition-opacity duration-300 ease-in-out ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        id="nav-panel"
        className={`fixed inset-y-0 right-0 z-[200] flex w-100 max-w-[82vw] flex-col border-l border-[#272727] bg-[#2A2A2A] py-6 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        aria-label="Main"
      >
        <button
          className="mb-8 mr-18 self-end border-none bg-transparent p-2 text-white"
          type="button"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <ul className="m-0 flex list-none flex-col p-0">
          {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between gap-3 border-b border-white/10 px-[70px] py-[25px] font-[family-name:var(--font-body)] text-[16px]  tracking-wide text-white transition-colors duration-300 hover:border-[#C10005] hover:text-[#C10005] hover:bg-[#464646] focus:border-[#C10005] focus:text-[#C10005] focus:bg-[#464646]"
            >
              <ChevronLeft className="transition-transform duration-300 w-[14px]"  />
              

              <span className="ml-auto text-right transition-colors duration-300">
                {link.label}
              </span>
            </a>
          </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
