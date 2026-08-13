import { Instagram } from "lucide-react";

const posts = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=85"
];

export function InstagramGrid() {
  return (
    <section id="instagram" className="bg-ali-cream py-24 text-ali-dark sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="eyebrow text-ali-blue">FOLLOW ALI</p>
          <h2 className="display mt-4 text-6xl uppercase leading-none sm:text-8xl">@TOKOKOPIALI</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {posts.map((src, i) => (
            <a key={src} href="https://www.instagram.com/tokokopiali/" target="_blank" rel="noreferrer" className="group relative overflow-hidden">
              <img src={src} alt={`Toko Kopi Ali Instagram post ${i + 1}`} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-ali-dark/65 opacity-0 transition group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-ali-dark"><Instagram size={15} /> VIEW POST</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://www.instagram.com/tokokopiali/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ali-blue px-7 py-4 font-bold text-white transition hover:-translate-y-1">
            <Instagram size={18} /> FOLLOW INSTAGRAM →
          </a>
        </div>
      </div>
    </section>
  );
}