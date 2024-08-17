import { Hero } from "@/app/about-us/_components/Hero";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Story } from "./_components/Story";
import { Mission } from "./_components/Mission";
import { People } from "./_components/People";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Mission />
      <People />
      <Footer />
    </>
  );
}
