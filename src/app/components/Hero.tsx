import React from "react";
import Image from "next/image";
import findCloth from "@/app/assets/FIND CLOTHES THAT MATCHES YOUR STYLE.png";
import models from "@/app/assets/heroImage.png";
import star from "@/app/assets/starLarge.png";
import "../css/satoshi.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#F2F0F1] md:w-[1260px] mx-auto px-4 md:px-[100px] py-8 md:py-12">
      {/* Left Section (Text and Button) */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 md:space-y-8">
        {/* Main Heading */}
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: "integral" }}
        >
          Find clothes that matches your style
        </h1>

        {/* Description */}
        <p
          className="text-sm md:text-base leading-relaxed opacity-80 max-w-md"
          style={{ fontFamily: "Satoshi-Light" }}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        {/* Shop Now Button */}
        <Link href="/cart">
        <button className="bg-black border border-gray-500 text-white rounded-full hover:bg-white hover:text-black px-8 py-3 text-sm md:text-base">
          Shop now
        </button>
        </Link>

        {/* Stats Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 mt-4">
          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-xl md:text-3xl font-bold">200+</h1>
            <p className="text-xs md:text-sm opacity-60">
              International Brands
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-black opacity-10"></div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-xl md:text-3xl font-bold">2000+</h1>
            <p className="text-xs md:text-sm opacity-60">
              High-Quality Products
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-black opacity-10"></div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-xl md:text-3xl font-bold">30,000+</h1>
            <p className="text-xs md:text-sm opacity-60">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right Section (Image and Stars) */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0">
        {/* Hero Image */}
        <Image
          src={models}
          alt="HeroImage"
          className="w-full max-w-sm md:max-w-lg rounded-lg object-cover"
        />

        {/* Stars */}
        <Image
          src={star}
          alt="star"
          className="absolute w-12 md:w-16 top-4 md:top-8 right-4 md:right-8 animate-pulse"
        />
        <Image
          src={star}
          alt="star"
          className="absolute w-8 md:w-12 bottom-8 md:bottom-12 left-4 md:left-8 animate-pulse"
        />
      </div>
    </div>
  );
}
