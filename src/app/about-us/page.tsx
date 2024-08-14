import { CallToAction } from "@/app/about-us/_components/CallToAction";
import { Header } from "@/app/about-us/_components/Header";
import { Hero } from "@/app/about-us/_components/Hero";
import { LogoTicker } from "@/app/about-us/_components/LogoTicker";
import { Pricing } from "@/app/about-us/_components/Pricing";
import { ProductShowcase } from "@/app/about-us/_components/ProductShowcase";
import { Testimonials } from "@/app/about-us/_components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
