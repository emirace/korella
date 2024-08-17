"use client";

import HomeImage from "@/assets/story.png";

import Image from "next/image";

export const Story = () => {
  return (
    <section className="bg-[#EBF6FF]">
      <div className="relative flex flex-col items-start max-w-screen-xl mx-auto p-6 lg:p-0 lg:py-28  gap-16 opacity-100 font-space-grotesk mt-16 ">
        <div className="text-left">
          <div className="flex justify-between align-bottom text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">Our Story</h2>
          </div>

          <p className="text-base lg:text-lg font-light text-gray-600">
            Korella.ai was founded with a vision to revolutionize how businesses
            interact with their customers. By leveraging advanced AI
            technologies, we aim to create seamless, personalized, and efficient
            customer experiences. Our team is passionate about innovation, and
            we are committed to helping companies around the world enhance their
            operations through our state-of-the-art solutions.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-5 w-full">
          <div className="col-span-3 relative h-[23vw]">
            <Image
              src={HomeImage}
              alt="Team working"
              // width={1312}
              // height={829}
              fill
              className="rounded-lg object-cover "
            />
          </div>
          <div className="col-span-3 relative h-[23vw]">
            <Image
              src={HomeImage}
              alt="Team working"
              fill
              // width={1312}
              // height={829}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-4 relative h-[23vw]">
            <Image
              src={HomeImage}
              fill
              alt="Team working"
              // width={1312}
              // height={829}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-2 relative h-[23vw]">
            <Image
              src={HomeImage}
              alt="Team working"
              fill
              // width={1312}
              // height={829}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
