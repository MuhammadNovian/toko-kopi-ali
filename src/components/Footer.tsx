import { Instagram, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ali-dark pb-24 pt-14 md:pb-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="display text-4xl">TOKO KOPI ALI</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/45">Good coffee. Good people. Good stories.</p>
          </div>

          <div>
            <p className="eyebrow text-ali-yellow">EXPLORE</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/55">
              <a href="#about">About</a><a href="#menu">Menu</a><a href="#locations">Locations</a><a href="#instagram">Instagram</a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-ali-yellow">FOLLOW</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/55">
              <a href="https://www.instagram.com/tokokopiali/" target="_blank" rel="noreferrer" className="flex items-center gap-2"><Instagram size={15} /> Instagram</a>
              <a href="#" className="flex items-center gap-2"><Music2 size={15} /> TikTok</a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-ali-yellow">ORDER</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/55">
              <a href="#order">GoFood</a><a href="#order">GrabFood</a><a href="#order">ShopeeFood</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/35">
          © 2026 Toko Kopi Ali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}