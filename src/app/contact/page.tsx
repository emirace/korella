import { Footer } from "@/components/Footer";
import { Contact } from "./_components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="block ">
        <Navbar />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
