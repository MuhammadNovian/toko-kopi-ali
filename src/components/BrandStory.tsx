import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section className="bg-ali-brown py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="overflow-hidden rounded-[34px]">
            <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1600&q=90" alt="Coffee shop atmosphere" loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="eyebrow text-ali-yellow">THE ALI WAY</p>
          <h2 className="display mt-5 text-6xl uppercase leading-[.9] sm:text-8xl">More than<br />just coffee.</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Ada hari ketika kita butuh kopi. Ada hari ketika kita butuh tempat. Dan ada hari ketika kita butuh keduanya. Ali dibuat untuk ketiganya.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["NGOPI", "NGOBROL", "NONGKRONG"].map(x => (
              <div key={x} className="rounded-2xl border border-white/15 p-4 text-center text-xs font-bold tracking-widest">{x}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}