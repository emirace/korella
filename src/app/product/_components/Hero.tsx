"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/loAsset.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={heroRef} className="relative pb-20 pt-20 md:pb-10 bg-black">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-[radial-gradient(circle,#fff_0.2_1px,transparent_1px)] bg-[size:10px_10px] w-[50%] h-[50%] opacity-30"></div>
      </div>
      <div className="container relative z-10 text-white">
        <div className="md:flex items-center">
          <div className="md:flex-1 md:p-10">
            <div className="text-sm inline-flex border border-white/10 px-3 py-1 rounded-lg tracking-tight">
              Discover how AI can transform your business
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mt-6">
              Unlock the Power of Conversation
            </h1>
            <p className="text-xl text-white tracking-tight mt-6">
              {
                "Extract valuable insights, improve customer service, ensure compliance, and optimize business processes."
              }
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Button>
                Get for free
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
