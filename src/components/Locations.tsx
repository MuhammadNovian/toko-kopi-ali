import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { locations } from "../data/locations";

export function Locations() {
  return (
    <section id="locations" className="bg-ali-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-ali-yellow">COME FIND US</p>
            <h2 className="display mt-4 text-6xl uppercase leading-none sm:text-8xl">Find your Ali</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">Multiple places to find your coffee fix. Replace the placeholder branch data with official addresses and ordering links.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {locations.map((location, i) => (
            <article key={location.name} className="rounded-ali border border-white/10 bg-white/[.035] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="display text-4xl text-ali-yellow">0{i + 1}</span>
                <MapPin size={20} className="text-white/50" />
              </div>
              <h3 className="mt-10 text-xl font-bold">{location.name}</h3>
              <p className="mt-2 text-sm text-white/50">{location.address}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-white/60"><Clock size={16} /> {location.hours}</div>
              <div className="mt-7 flex gap-2">
                <a href={location.maps} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-bold transition hover:bg-white/5">MAPS <ArrowUpRight size={15} /></a>
                <a href="#order" className="inline-flex flex-1 items-center justify-center rounded-full bg-ali-yellow px-4 py-3 text-sm font-bold text-ali-dark transition hover:-translate-y-0.5">ORDER</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}