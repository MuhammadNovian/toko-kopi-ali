import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Locations", "#locations"],
  ["Instagram", "#instagram"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 max-w-7xl px-4 sm:px-6">
        <div className="rounded-full border border-white/10 bg-ali-dark/80 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <a href="#" className="display text-xl tracking-wide sm:text-2xl">TOKO KOPI ALI</a>

            <div className="hidden items-center gap-8 md:flex">
              {links.map(([label, href]) => (
                <a key={href} href={href} className="text-sm text-white/70 transition hover:text-white">{label}</a>
              ))}
              <a href="#order" className="rounded-full bg-ali-yellow px-5 py-2.5 text-sm font-bold text-ali-dark transition hover:-translate-y-0.5">ORDER NOW</a>
            </div>

            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-full p-2 md:hidden">
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 pb-2 pt-4 md:hidden">
              <div className="flex flex-col gap-1">
                {links.map(([label, href]) => (
                  <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-white/80 hover:bg-white/5">{label}</a>
                ))}
                <a href="#order" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-ali-yellow px-5 py-3 text-center font-bold text-ali-dark">ORDER NOW</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}