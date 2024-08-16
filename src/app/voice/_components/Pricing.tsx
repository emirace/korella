"use client";

import CheckIcon from "@/assets/check.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    id: 1, // Add an id for a unique key
    monthlyPrice: "5.90",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: ["For usage less 50 hours per month"],
  },
  {
    id: 2, // Add an id for a unique key
    monthlyPrice: "5.60",
    buttonText: "Get started",
    popular: true,
    inverse: true,
    features: ["For usage less than 100 hours per month"],
  },
  {
    id: 3, // Add an id for a unique key
    monthlyPrice: "4.90",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: ["For usage less than 100 hours per month"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({ id, monthlyPrice, buttonText, popular, inverse, features }) => (
              <div
                key={id} // Add the key prop here
                className={cn(
                  "p-10 border border-solid border-[#222222] rounded-3xl max-w-xs w-full",
                  { "bg-[#222222] text-white": inverse === true }
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={cn("text-lg font-bold text-white", {
                      "text-white": inverse === true,
                    })}
                  ></h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF)] text-transparent [background-size:200%] bg-clip-text font-medium"
                        animate={{ backgroundPositionX: "-100%" }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                          duration: 2,
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px] text-white">
                  <span className="text-4xl font-bold tracking-tighter leading-0">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={cn("tracking-tight font-bold text-white", {
                      "text-white": inverse === true,
                    })}
                  >
                    /Per hour
                  </span>
                </div>
                <Button
                  className={cn("w-full mt-[30px]", {
                    "bg-white text-[#222222] hover:bg-white": inverse === true,
                  })}
                >
                  {buttonText}
                </Button>
                <ul className="flex flex-col gap-5 mt-8 text-white text-4xl">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
