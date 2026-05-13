import Hero from "@/components/Hero";
import Manifest from "@/components/Manifest";
import Inwestycja from "@/components/Inwestycja";
import Mieszkania from "@/components/Mieszkania";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifest />
      <Inwestycja />
      <Mieszkania />
    </main>
  );
}
