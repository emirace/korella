"use client";

import Wave from "@/assets/wavesketch.png";

import Image from "next/image";

const data = [
  {
    title: "Innovation",
    detail:
      "Constantly pushing the boundaries of technology to deliver groundbreaking solutions.",
  },
  {
    title: "Integrity",
    detail:
      "Upholding the highest standards of honesty and transparency in all our dealings.",
  },
  {
    title: "Customer Centric",
    detail:
      "Focusing on customer needs and delivering exceptional value in every interaction.",
  },
  {
    title: "Collaboration",
    detail:
      "Working together as a team and with our partners to achieve common goals.",
  },
];

export const Mission = () => {
  return (
    <section className="bg-[##F5F5F5">
      <div className="relative flex flex-col items-start max-w-screen-xl mx-auto p-6 lg:p-0   gap-16 opacity-100 font-space-grotesk mt-16 ">
        <div className="text-left">
          <div className="flex justify-between align-bottom text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">
              Our Mission
            </h2>
          </div>

          <p className="text-base lg:text-lg font-light text-gray-600">
            Our mission is to revolutionize customer interactions through
            innovative AI technology, providing businesses with the tools they
            need to succeed in a rapidly evolving digital landscape.
          </p>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex-1">
            <Image
              src={Wave}
              alt="Team working"
              width={1312}
              height={900}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-6 lg:px-0   gap-16 font-space-grotesk py-10">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 ">
          Our Core Values
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {data.map((card) => (
            <div
              className="flex flex-col p-4 gap-4 rounded-lg border border-gray-200 bg-white shadow"
              key={card.title}
            >
              <div className="flex  items-center gap-5">
                <div className="w-8 h-8 rounded-full bg-[#C1E3FF]" />
                <div className="font-bold text-xl">{card.title}</div>
              </div>
              <div className="">{card.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
