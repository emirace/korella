"use client";

import Navbar from "@/components/Navbar";
import { Hero } from "./_components/Hero";
import { SecondSection } from "@/app/(landing-page)/_components/second-section";
import { ThirdSection } from "./_components/third-section";
import { ContactForm } from "./_components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="block ">
        <Navbar />
      </div>
      <Hero />
      <SecondSection />
      <ThirdSection />
      <ContactForm />
      <Footer />
    </>
  );
}
