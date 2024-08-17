"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import HomeImage from "@/assets/home-image.png";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-start max-w-screen-xl mx-auto p-6 lg:px-0 pt-16 md:pt-52 gap-16 opacity-100 font-space-grotesk">
      <div className="text-left">
        <div className="flex justify-between align-bottom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 ">Who We Are</h1>
          <button className="bg-black border-2 border-white text-white py-2 px-4 flex gap-1 items-center rounded-lg mt-4 hover:bg-white hover:text-[#0d1132] text-center">
            Get Started <ArrowRight className="size-5" />
          </button>
        </div>

        <p className="text-xl lg:text-2xl font-light mb-8">
          Innovating customer interactions with cutting-edge AI solutions
        </p>
        <p className="text-base lg:text-lg font-light text-gray-600">
          At Korella.ai, we are passionate about transforming the way businesses
          interact with their customers. Our cutting-edge AI solutions empower
          organizations to unlock valuable insights, streamline operations, and
          enhance customer satisfaction.
        </p>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex-1">
          <Image
            src={HomeImage}
            alt="Team working"
            width={1312}
            height={829}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
