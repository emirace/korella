import React from "react";
// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

import homeImage from "@/assets/second-home-image.png";
import secondImage from "@/assets/second-home.png";

import AccordionComponent from "@/components/accordion";

export const SecondSection = () => {
  return (
    <section className="bg-[#EBF6FF] py-12 md:px-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="flex flex-col md:col-span-3 justify-center relative h-[50vw]">
            <Image
              src={secondImage}
              alt="Team"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col md:col-span-2 justify-center">
            <div className="">
              <h2 className="font-space-grotesk text-4xl font-semibold leading-[61.25px]">
                What is
              </h2>
              <h2 className="font-space-grotesk text-4xl font-semibold leading-[61.25px] mb-4">
                Speech Analytics?
              </h2>
            </div>
            <div className="bg-white  shadow p-6 rounded-lg">
              <h3 className="text-xl mb-2">
                Speech analytics can significantly enhance your business
                operations and boost revenue by providing deep insights into
                customer interactions. By analyzing recorded conversations, you
                can identify recurring issues, customer pain points, and areas
                for improvement in your products or services. This allows you to
                proactively address problems, leading to higher customer
                satisfaction and retention rates.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
