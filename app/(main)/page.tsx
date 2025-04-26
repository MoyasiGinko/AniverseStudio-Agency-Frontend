import Community from "@/components/main/community";
import CTA from "@/components/main/cta";
import Featured from "@/components/main/feature";
import Hero from "@/components/main/hero";
import Service from "@/components/main/service";
import Technology from "@/components/main/technology";
import Testimonials from "@/components/main/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-950">
      <Hero />
      <Service />
      <Featured />
      <Testimonials />
      <CTA />
      <Technology />
      <Community />
    </main>
  );
}
