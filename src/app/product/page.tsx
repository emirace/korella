import { Hero } from "@/app/product/_components/Hero";
import { SecondSection } from "@/app/product/_components/second-section";
import { ThirdSection } from "@/app/product/_components/third-section";
import { Footer } from "@/components/Footer";
import { SpeechAnalysis } from "./_components/Speach";
import { FeatureSection } from "./_components/Features";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SecondSection />
      <SpeechAnalysis />
      <FeatureSection />
      <ThirdSection />
      <Footer />
    </>
  );
}
