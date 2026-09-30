"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${solid || open ? "border-b border-edge bg-ink/85 backdrop-blur" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-display text-xl font-bold text-white"><span className="text-accent">A</span>it Lakhdar</a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.slice(0, 4).map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm text-slate-300 transition-colors hover:text-white">{l}</a></li>
          ))}
          <li><a href="#contact" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110">Contact Me</a></li>
        </ul>
        <button className="p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-5 md:hidden">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-panel">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
