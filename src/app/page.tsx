import { Hero } from "@/components/Sections/Hero";
import { Videos } from "@/components/Sections/Videos";
import { About } from "@/components/Sections/About";

import { jsonLdInfo, metadataInfo } from "@/data/metadata";

export const metadata = metadataInfo;
const jsonLd = jsonLdInfo;

export default function Home() {
  return (
    <main>
      <Hero />

      <Videos />

      <About />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
