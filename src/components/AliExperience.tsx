import { Coffee, MapPinned, Users } from "lucide-react";

const features = [
  { icon: Coffee, number: "01", title: "COFFEE", text: "Coffee to accompany your day." },
  { icon: MapPinned, number: "02", title: "SPACE", text: "A place to work, meet and stay a little longer." },
  { icon: Users, number: "03", title: "PEOPLE", text: "Because coffee is better when there is a story behind it." }
];

export function AliExperience() {
  return (
    <section className="bg-ali-cream py-24 text-ali-dark sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow text-ali-blue">THE ALI EXPERIENCE</p>
          <h2 className="display mt-4 text-6xl uppercase leading-none sm:text-8xl">Come for one.<br />Stay for the story.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, number, title, text }) => (
            <div key={title} className="group rounded-ali border border-ali-dark/10 bg-white/40 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white sm:p-9">
              <div className="flex items-center justify-between">
                <span className="display text-5xl text-ali-blue">{number}</span>
                <Icon className="text-ali-blue" size={28} />
              </div>
              <h3 className="display mt-16 text-4xl">{title}</h3>
              <p className="mt-3 text-ali-dark/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}