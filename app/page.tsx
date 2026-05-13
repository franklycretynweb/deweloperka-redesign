import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Manifest from "@/components/Manifest";
import Mieszkania from "@/components/Mieszkania";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Manifest />
      <Mieszkania />
      <Kontakt />
      <Footer />
    </main>
  );
}
