"use client";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import Image1 from "@/assets/people1.png";
import Image2 from "@/assets/people2.png";
import ArrowRight from "@/assets/arrow-right.svg";

import Image from "next/image";

const data = [
  {
    name: "Innovation",
    image: Image1,
    role: "Team Lead",
  },
  {
    name: "Integrity",
    image: Image2,
    role: "Team Lead",
  },
  {
    name: "Customer Centric",
    image: Image1,
    role: "Team Lead",
  },
  {
    name: "Collaboration",
    image: Image2,
    role: "Team Lead",
  },
];

export const People = () => {
  return (
    <section className="bg-[#EBF6FF]">
      <div className="relative flex flex-col items-start max-w-screen-xl mx-auto p-6 lg:p-0 lg:py-28  gap-12 opacity-100 font-space-grotesk mt-16 ">
        <div className="text-left">
          <div className="flex justify-between align-bottom text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">
              Meet the Minds Behind Korella.ai
            </h2>
          </div>

          <p className="text-base lg:text-lg font-light text-gray-600">
            A diverse team of innovators driving the future of AI technology.
          </p>
        </div>
        <div className="flex justify-between gap-8 flex-wrap">
          {data.map((card) => (
            <div className="flex flex-col gap-2 " key={card.name}>
              <Image
                src={card.image}
                alt="Team working"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <div className="font-bold ">{card.name}</div>
              <div className="">{card.role}</div>
              <div className="flex  items-center gap-5">
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center gap-8 w-full mt-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 ">
            Ready to Work with Us?
          </h2>
          <div className="text-center">
            Whether you&apos;re interested in our products or want to join our
            team, we&apos;d love to hear from you.&quot;
          </div>
          <button className="bg-[#0F1340]  text-white py-2 px-4 flex gap-1 items-center rounded-lg mt-10 hover:bg-white hover:text-[#0d1132] text-center">
            Get in touch <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
