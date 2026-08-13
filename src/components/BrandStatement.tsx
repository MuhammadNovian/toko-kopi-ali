import { motion } from "framer-motion";

export function BrandStatement() {
  return (
    <section id="about" className="grid-paper bg-ali-cream py-24 text-ali-dark sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
          <p className="eyebrow text-ali-blue">MORE THAN COFFEE</p>
          <h2 className="display mt-5 max-w-4xl text-6xl uppercase leading-[.9] sm:text-8xl">
            More than<br />coffee.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ali-dark/65">
            Toko Kopi Ali adalah tempat untuk menikmati kopi, bertemu orang, bekerja, dan membuat cerita baru. Datang sendiri, datang ramai-ramai. Yang penting, datang.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-ali-yellow" />
          <div className="relative rounded-[42px] bg-ali-blue p-8 shadow-ali">
            <div className="aspect-[4/5] rounded-[30px] border border-white/15 bg-ali-dark/20 p-7">
              <div className="flex h-full flex-col justify-between">
                <div className="display text-7xl text-ali-yellow">ALI</div>
                <div>
                  <div className="mb-3 h-20 w-20 rounded-full border-8 border-ali-cream/80" />
                  <p className="text-sm font-bold uppercase leading-tight text-white">A little coffee.<br />A lot of stories.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}