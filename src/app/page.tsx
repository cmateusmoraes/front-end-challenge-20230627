import { Hero } from "@/components/Sections/Hero";
import { Videos } from "@/components/Sections/Videos";
import { About } from "@/components/Sections/About";

export default function Home() {
  return (
    <main role="main">
      <Hero />

      <Videos />

      <About />
    </main>
  );
}
