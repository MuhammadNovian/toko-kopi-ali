import { ArrowUpRight } from "lucide-react";
import type { MenuItem } from "../data/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group overflow-hidden rounded-ali bg-white/[.055]">
      <div className="relative overflow-hidden">
        <img src={item.image} alt={item.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-ali-dark/80 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white backdrop-blur">{item.category}</span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-white/50">{item.description}</p>
          </div>
          <span className="shrink-0 font-bold text-ali-yellow">{item.price}</span>
        </div>
        <a href="#order" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/70 transition group-hover:text-ali-yellow">
          ORDER <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}