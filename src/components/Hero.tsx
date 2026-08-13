import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=90"
        alt="Warm modern coffee shop interior"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ali-dark/95 via-ali-dark/65 to-ali-dark/15" />
      <div className="absolute inset-0 bg-ali-blue/15 mix-blend-multiply" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-36 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <p className="eyebrow mb-5 text-ali-yellow">TOKO KOPI ALI · PALEMBANG</p>
          <h1 className="display max-w-5xl text-6xl uppercase leading-[.88] sm:text-8xl lg:text-[9.5rem]">
            Kopi buat<br />
            <span className="text-ali-yellow">menemani hari.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Kopi, makanan, dan tempat untuk menemani cerita hari ini.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#order" className="inline-flex items-center gap-2 rounded-full bg-ali-yellow px-7 py-4 font-bold text-ali-dark transition hover:-translate-y-1">
              ORDER NOW <ArrowDownRight size={18} />
            </a>
            <a href="#locations" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 font-bold backdrop-blur-sm transition hover:bg-white/10">
              <MapPin size={18} /> FIND US
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-5 hidden w-44 rotate-3 sm:block lg:right-14"
        >
          <div className="rounded-[35%] border border-ali-yellow/40 bg-ali-blue/90 p-5 text-center shadow-ali">
            <div className="display text-4xl text-ali-yellow">ALI</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Good coffee.<br />Good stories.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}