import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Manifest from "@/components/Manifest";
import Mieszkania from "@/components/Mieszkania";
import Kontakt from "@/components/Kontakt";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Manifest />
      <Mieszkania />
      <Kontakt />
    </main>
  );
}
