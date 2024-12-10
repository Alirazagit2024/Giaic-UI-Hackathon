import React from "react";
import Image from "next/image";
import brand1 from "@/app/assets/versace.png";
import brand2 from "@/app/assets/zara.png";
import brand3 from "@/app/assets/gucci.png";
import brand4 from "@/app/assets/prada.png";
import brand5 from "@/app/assets/calvin.png";

export default function BrandBar() {
  return (
    <div className="bg-black w-full py-4 md:py-6 md:w-[1260px] mx-auto">
      {/* Scrollable container */}
      <div className="flex overflow-x-scroll whitespace-nowrap items-center justify-start gap-8 px-4 md:gap-16 md:justify-center hide-scrollbar">
        <Image
          src={brand1}
          alt="Versace"
          className="w-[116px] h-[23px] md:w-[156px] md:h-[33px] flex-shrink-0"
        />
        <Image
          src={brand2}
          alt="Zara"
          className="w-[64px] h-[27px] md:w-[81px] md:h-[38px] flex-shrink-0"
        />
        <Image
          src={brand3}
          alt="Gucci"
          className="w-[109px] h-[25px] md:w-[146px] md:h-[36px] flex-shrink-0"
        />
        <Image
          src={brand4}
          alt="Prada"
          className="w-[127px] h-[21px] md:w-[164px] md:h-[32px] flex-shrink-0"
        />
        <Image
          src={brand5}
          alt="Calvin Klein"
          className="w-[135px] h-[22px] md:w-[207px] md:h-[33px] flex-shrink-0"
        />
      </div>
    </div>
  );
}
