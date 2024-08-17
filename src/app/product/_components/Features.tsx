"use client";
import React from "react";
import { NextPage } from "next";
import {
  FaChartBar,
  FaMicrophone,
  FaFlag,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { ReactNode } from "react";
import { Star, Sparkles } from "lucide-react";

interface Feature {
  icon: ReactNode;
  text: string;
}

interface FeatureData {
  title: string;
  description: string;
  features: Feature[];
}

const featuresData: FeatureData[] = [
  {
    title: "Pattern Recognition",
    description: "Identify patterns, trends, and anomalies in spoken language.",
    features: [
      { icon: <FaChartBar />, text: "Identification of recurring themes" },
      { icon: <FaMicrophone />, text: "Speech-to-text transcription accuracy" },
      {
        icon: <FaMicrophone />,
        text: "Detection of anomalies in conversations",
      },
    ],
  },
  {
    title: "Sentiment Analysis",
    description:
      "Understand customer emotions and tailor responses accordingly.",
    features: [
      { icon: <FaChartBar />, text: "Emotion detection in voice tone" },
      { icon: <FaMicrophone />, text: "Sentiment scoring and tracking" },
      { icon: <FaMicrophone />, text: "Customized response suggestions" },
    ],
  },
  {
    title: "Compliance Monitoring",
    description:
      "Ensure adherence to industry regulations and company policies.",
    features: [
      {
        icon: <FaFlag />,
        text: "Automatic flagging of non-compliant conversations",
      },
      { icon: <FaFlag />, text: "Detailed compliance reports" },
      { icon: <FaFlag />, text: "Regulatory adherence checks" },
    ],
  },
  {
    title: "Upsell and Cross-sell Opportunities",
    description: "Discover new opportunities for revenue generation.",
    features: [
      { icon: <FaHandHoldingUsd />, text: "Identification of upsell cues" },
      { icon: <FaHandHoldingUsd />, text: "Cross-sell suggestion engine" },
      { icon: <FaHandHoldingUsd />, text: "Sales performance tracking" },
    ],
  },
];

const FeatureCard = ({ title, description, features }: FeatureData) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between bg-[#222222] p-6  rounded-lg w-full">
      <div className="flex flex-col justify-left md:w-3/5">
        <Star className="text-white mb-4 h-6 w-6" />
        <h2 className="font-space-grotesk text-1xl md:text-2xl font-semibold text-white mb-4 ">
          {title}
        </h2>
        <p className="font-space-grotesk text-1xl md:text-1xl text-white max-w-md">
          {description}
        </p>
      </div>
      <div className="flex flex-col md:w-2/5 space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 p-3 rounded bg-[#2D2D2D] shadow-lg text-white"
          >
            <span className="text-lg">{feature.icon}</span>
            <span className="font-space-grotesk flex flex-col">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FeatureSection: NextPage = () => {
  return (
    <section className="w-full bg-black">
      <div className="min-h-screen max-w-screen-xl mx-auto py-10 px-4 text-left">
        <h1 className="font-space-grotesk text-1xl md:text-5xl font-semibold text-white mb-10 text-left">
          Key Features
        </h1>
        <div className="flex flex-col gap-10">
          {featuresData.map((feature: any, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
