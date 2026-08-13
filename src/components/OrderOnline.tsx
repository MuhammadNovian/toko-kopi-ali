import { ArrowUpRight } from "lucide-react";

const services = ["GOFOOD", "GRABFOOD", "SHOPEEFOOD"];

export function OrderOnline() {
  return (
    <section id="order" className="relative overflow-hidden bg-ali-blue py-24 sm:py-32">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ali-yellow/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-black/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="eyebrow text-ali-yellow">READY?</p>
        <h2 className="display mt-5 text-6xl uppercase leading-[.86] sm:text-8xl lg:text-[9rem]">Your Ali<br />is on the way.</h2>
        <p className="mx-auto mt-7 max-w-lg text-lg text-white/70">Order your favorites without leaving your couch.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {services.map((service, i) => (
            <a key={service} href="#" className={`inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold transition hover:-translate-y-1 ${i === 2 ? "bg-ali-yellow text-ali-dark" : "bg-white text-ali-dark"}`}>
              {service} <ArrowUpRight size={17} />
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/40">Replace each button URL with the official merchant link for each platform/branch.</p>
      </div>
    </section>
  );
}