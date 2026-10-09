import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div className="site-shell flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Work />
        <Research />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
