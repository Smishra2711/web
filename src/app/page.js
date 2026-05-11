import AboutSection from "./components/sections/about";
import ClientSection from "./components/sections/client";
import Hero from "./components/sections/hero";
import ServicesSection from "./components/sections/services";

export default function Home() {
  return (
    <main class="main">
      <Hero />
      <ClientSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
