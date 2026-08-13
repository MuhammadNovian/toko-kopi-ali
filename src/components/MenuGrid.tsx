import { useMemo, useState } from "react";
import { menu } from "../data/menu";
import { MenuCard } from "./MenuCard";

const filters = ["ALL", "COFFEE", "NON COFFEE", "FOOD", "PASTRY"] as const;

export function MenuGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("ALL");
  const items = useMemo(() => filter === "ALL" ? menu : menu.filter(x => x.category === filter), [filter]);

  return (
    <section id="menu" className="bg-ali-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-7 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-ali-yellow">WHAT'S GOOD TODAY</p>
            <h2 className="display mt-3 text-6xl uppercase leading-none sm:text-8xl">Ali's picks</h2>
          </div>
          <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold transition ${filter === f ? "border-ali-yellow bg-ali-yellow text-ali-dark" : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(item => <MenuCard key={item.name} item={item} />)}
        </div>
      </div>
    </section>
  );
}