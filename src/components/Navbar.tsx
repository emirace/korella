"use client";

import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaTwitter,
  FaLinkedin,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className="md:absolute md:left-1/2 top-0 md:-translate-x-1/2 bg-white border-2 mx-auto justify-center align-middle w-full md:w-[1000px] rounded z-50 overflow-x-clip md:my-10 font-space-grotesk">
        <div className="container mx-auto px-4 py-4 flex items-center text-left justify-between">
          <a href="/">
            <Image src={Logo} alt="Korella AI Logo" height={20} width={60} />
          </a>

          <div className="hidden md:flex space-x-8 items-center mx-auto">
            <button
              onClick={() => toggleDropdown("products")}
              className="flex items-center space-x-2"
            >
              <span>Products</span>
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "products" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <button
              onClick={() => toggleDropdown("pricing")}
              className="flex items-center space-x-2"
            >
              <span>Pricing</span>
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "pricing" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <button
              onClick={() => toggleDropdown("company")}
              className="flex items-center space-x-2"
            >
              <span>Company</span>
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "company" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div className="flex justify-center gap-1 items-center">
              <a href="/contact">Contact Us</a>
            </div>
          </div>

          <div className="flex justify-center gap-1 items-center">
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded hidden md:inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2 size-5" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-black focus:outline-none"
          >
            {menuOpen ? <IoClose /> : <CiMenuFries />}
          </button>
        </div>
        <div className="hidden md:block">
          {openDropdown === "products" && (
            <div className="flex text-left p-4 gap-4">
              <div className="w-1/3 border-r border-black">
                <h3 className="font-semibold text-xl mb-2">
                  Explore Our Advanced AI Solutions
                </h3>
                <p className="text-sm">
                  Discover how our cutting-edge AI technologies can transform
                  your business operations. Click on each product to learn more.
                </p>
              </div>
              <div className="w-2/3 space-y-2">
                <a href="/product" className="flex gap-3 items-start space-x-2">
                  <span className="text-blue-600 text-2xl">*</span>
                  <div>
                    <h4 className="font-semibold mb-2">Speech Analytics</h4>
                    <p className="text-sm">
                      Extract valuable insights, improve customer service,
                      ensure compliance, and optimize business processes by
                      identifying patterns, trends, and anomalies in spoken
                      language.
                    </p>
                  </div>
                </a>

                <a
                  href="/products"
                  className="flex gap-3 items-start space-x-2"
                >
                  <span className="text-blue-500 text-2xl">*</span>
                  <div>
                    <h4 className="font-semibold mb-2">Voice Assistant</h4>
                    <p className="text-sm">
                      Streamline customer interactions with advanced AI,
                      providing efficient, personalized support and reducing
                      wait times.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          )}

          {openDropdown === "pricing" && (
            <div className="flex text-left p-4 gap-4">
              <div className="w-1/3 border-r border-black">
                <h3 className="font-semibold  text-xl mb-2">
                  Flexible Pricing Plans
                </h3>
                <p className="text-sm">
                  Choose the plan that best fits your business needs.
                </p>
              </div>
              <div className="w-2/3 space-y-2">
                <a
                  href="/products"
                  className="flex gap-3 items-start space-x-2"
                >
                  <span className="text-blue-600 text-2xl">*</span>
                  <div>
                    <h4 className="font-semibold mb-2">Speech Analytics</h4>
                    <p className="text-sm">
                      Select a plan that meets your business requirements and
                      scale as you grow.
                    </p>
                  </div>
                </a>
                <a
                  href="/products"
                  className="flex gap-3 items-start space-x-2"
                >
                  <span className="text-blue-600 text-2xl">*</span>
                  <div>
                    <h4 className="font-semibold mb-2">Voice Assistant</h4>
                    <p className="text-sm">
                      Select a plan that meets your business requirements and
                      scale as you grow.
                    </p>
                  </div>
                </a>
                <a
                  href="/products"
                  className="flex gap-3 items-start space-x-2"
                >
                  <span className="text-blue-600 text-2xl">*</span>
                  <div>
                    <h4 className="font-semibold mb-2">Combo Plan</h4>
                    <p className="text-sm">
                      A convenient plan to gain access to Speech Analytics and
                      Voice Assistant Services
                    </p>
                  </div>
                </a>
              </div>
            </div>
          )}

          {openDropdown === "company" && (
            <div className="flex text-left p-4 gap-4">
              <div className="w-1/3 border-r border-black">
                <h3 className="font-semibold text-xl mb-2">Who we are</h3>
                <p className="text-sm">Get to know us</p>
              </div>
              <div className="w-2/3 space-y-2">
                <div className="flex items-center space-x-2">
                  <div>
                    <h4 className="font-semibold mb-2">About us</h4>
                    <div className="flex gap-5 space-x-2">
                      <FaFacebook />
                      <FaLinkedin />
                      <FaInstagram />
                      <FaFacebookMessenger />
                      <FaTwitter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#F5F5F5] rounded-b-2xl">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="flex items-center justify-between px-4 py-2 w-full text-left"
              >
                Products
                <FaChevronRight
                  className={`transition-transform ${
                    openDropdown === "products" ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
              {openDropdown === "products" && (
                <div className=" p-4">
                  <div className="space-y-2">
                    <a href="/product" className="font-semibold">
                      Speech Analytics
                    </a>
                    <p className="text-sm">
                      Extract valuable insights, improve customer service,
                      ensure compliance, and optimize business processes by
                      identifying patterns, trends, and anomalies in spoken
                      language.
                    </p>
                    <h4 className="font-semibold">Voice Assistant</h4>
                    <p className="text-sm">
                      Streamline customer interactions with advanced AI,
                      providing efficient, personalized support and reducing
                      wait times..
                    </p>
                  </div>
                  <hr className="my-2" />
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("pricing")}
                className="flex items-center justify-between px-4 py-2 w-full text-left"
              >
                Pricing
                <FaChevronRight
                  className={`transition-transform ${
                    openDropdown === "pricing" ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
              {openDropdown === "pricing" && (
                <div className=" p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Speech Analytics</h4>
                    <p className="text-sm">
                      Select a plan that meets your business requirements and
                      scale as you grow.
                    </p>
                    <h4 className="font-semibold">Voice Assistant</h4>
                    <p className="text-sm">
                      Select a plan that meets your business requirements and
                      scale as you grow.
                    </p>
                    <h4 className="font-semibold">Combo Plan</h4>
                    <p className="text-sm">
                      A convenient plan to gain access to Speech Analytics and
                      Voice Assistant Services
                    </p>
                  </div>
                  <hr className="my-2" />
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("company")}
                className="flex items-center justify-between px-4 py-2 w-full text-left"
              >
                Company
                <FaChevronRight
                  className={`transition-transform ${
                    openDropdown === "company" ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
              {openDropdown === "company" && (
                <div className="p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">About us</h4>
                    <div className="flex space-x-2 gap-4">
                      <FaFacebook />
                      <FaLinkedin />
                      <FaInstagram />
                      <FaFacebookMessenger />
                      <FaTwitter />
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
      {/* <div className="h-[80px]" /> */}
    </>
  );
}
