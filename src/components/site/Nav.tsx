import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-8 z-50 px-3 pt-3 sm:px-6 sm:pt-4 transition-all duration-300">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled ? "glass-strong" : "glass",
        )}
      >
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/favicon.png"
            alt="KloudEra Technologies Logo"
            className="size-9 rounded-full object-contain transition-transform duration-500 group-hover:rotate-12"
          />
          <span className="text-sm font-semibold tracking-[0.18em] uppercase">
            Kloud<span className="text-primary">Era</span> Technologies
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] sm:inline-flex"
          >
            Book a Consultation
          </Link>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-border/60 text-foreground"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong mx-auto mt-2 max-w-7xl rounded-3xl p-3">
          <ul className="grid grid-cols-2 gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/8 hover:text-foreground"
                  activeProps={{ className: "bg-white/10 text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}