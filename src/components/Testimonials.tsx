import { Quote } from "lucide-react";

const testimonials = [
  "Tempatnya nyaman buat ngopi, ngobrol, sekaligus kerja sebentar.",
  "Interiornya punya karakter sendiri. Kopinya juga jadi alasan yang cukup bagus untuk balik lagi.",
  "Datang cuma mau beli kopi. Pulangnya malah sudah dua jam. Ya begitulah."
];

export function Testimonials() {
  return (
    <section className="bg-ali-blue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-ali-yellow">SOCIAL PROOF</p>
            <h2 className="display mt-4 text-6xl uppercase leading-none sm:text-8xl">People talk.</h2>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-2xl tracking-widest text-ali-yellow">★★★★★</div>
            <p className="mt-1 text-sm text-white/60">Based on Google Reviews</p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((text, i) => (
            <article key={i} className="rounded-ali bg-white p-7 text-ali-dark sm:p-8">
              <Quote className="text-ali-blue" size={28} />
              <p className="mt-8 text-lg font-medium leading-relaxed">“{text}”</p>
              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-ali-dark/45">Customer review</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}