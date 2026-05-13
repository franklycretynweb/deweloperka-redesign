import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Manifest from "@/components/Manifest";
import Inwestycja from "@/components/Inwestycja";
import Mieszkania from "@/components/Mieszkania";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Manifest />
      <Inwestycja />
      <Mieszkania />
    </main>
  );
}
