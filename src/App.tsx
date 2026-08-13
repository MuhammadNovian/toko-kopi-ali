import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandStatement } from "./components/BrandStatement";
import { MenuGrid } from "./components/MenuGrid";
import { BrandStory } from "./components/BrandStory";
import { AliExperience } from "./components/AliExperience";
import { Locations } from "./components/Locations";
import { Testimonials } from "./components/Testimonials";
import { InstagramGrid } from "./components/InstagramGrid";
import { OrderOnline } from "./components/OrderOnline";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ali-dark">
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <MenuGrid />
        <BrandStory />
        <AliExperience />
        <Locations />
        <Testimonials />
        <InstagramGrid />
        <OrderOnline />
      </main>
      <Footer />

      <a
        href="#order"
        className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-ali-yellow px-6 py-4 text-center font-bold text-ali-dark shadow-ali md:hidden"
      >
        ORDER NOW →
      </a>
    </div>
  );
}