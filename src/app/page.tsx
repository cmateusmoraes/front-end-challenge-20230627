import { Hero } from "@/components/sections/Hero";
import { Videos } from "@/components/sections/Videos";
import { About } from "@/components/sections/About";

import { metadataInfo } from "@/data/metadata";

export const metadata = metadataInfo;

export default function Home() {
  return (
    <main role="main">
      <Hero />

      <Videos />

      {/* <About /> */}
    </main>
  );
}
