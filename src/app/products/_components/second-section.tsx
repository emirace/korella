import React from "react";
// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

import homeImage from "@/assets/second-home-image.png";
import secondImage from "@/assets/second-home.png";

import AccordionComponent from "@/components/accordion";

export const SecondSection = () => {
  return (
    <section className="bg-white py-12 md:px-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <Image
              src={secondImage}
              alt="Team"
              width={400}
              height={100}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="">
              <h2 className="font-space-grotesk text-4xl font-semibold leading-[61.25px]">
                What is
              </h2>
              <h2 className="font-space-grotesk text-4xl font-semibold leading-[61.25px] mb-4">
                Voice Assistant?
              </h2>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl mb-2">
                {" "}
                A voice assistant for call centers can significantly enhance
                business operations by providing 24/7 customer service, reducing
                labor costs, and improving overall service quality.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
