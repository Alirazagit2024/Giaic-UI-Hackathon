import React from "react";
import Image from "next/image";
import Arrival1 from "@/app/assets/arrival1.png";
import Arrival2 from "@/app/assets/arrival2.png";
import Arrival3 from "@/app/assets/arrival3.png";
import Arrival4 from "@/app/assets/arrival4.png";
import rating1 from "@/app/assets/rating1.png";
import rating2 from "@/app/assets/rating2.png";
import rating3 from "@/app/assets/rating3.png";
import rating4 from "@/app/assets/rating4.png";
import rating5 from "@/app/assets/rating5.png";
import rating6 from "@/app/assets/rating6.png";
import rating7 from "@/app/assets/rating7.png";
import sell1 from "@/app/assets/sell1.png";
import sell2 from "@/app/assets/sell2.png";
import sell3 from "@/app/assets/sell3.png";
import sell4 from "@/app/assets/sell4.png";
import Link from "next/link";

function NewArrivals() {
  return (
    <>
      <div style={{ fontFamily: "Satoshi" }}>
        <div className="flex justify-center items-center font-bold text-[32px] md:w-[1260px] mx-auto leading-[38.4px] w-[296px] h-[38px] pt-[50px] pb-[32px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:pt-[72px] md:pb-[55px]">
          <h1 style={{ fontFamily: "integral" }}>NEW ARRIVALS</h1>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="overflow-x-auto hide-scrollbar mb-8 ">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Item 1 */}
          <div className="w-[198px] md:w-[295px] text-center">
            <Link href="/product">
              <Image
                src={Arrival1}
                alt="arrival1"
                className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
              />
            </Link>
            <h1 className="text-[16px] mt-[8px] text-[#333]">T-SHIRT WITH TAPE DETAILS</h1>
            <Link href="/product">
            <Image
              src={rating1}
              alt="rating"
              className="w-[127px] mx-auto h-[16px] md:w-[150px] md:h-[19px]"
            />
            </Link>
            <h1 className="text-[20px] font-bold">$120</h1>
          </div>

          {/* Item 2 */}
          <div className="w-[198px] md:w-[295px] text-center">
          <Link href="/product">
            <Image
              src={Arrival2}
              alt="arrival2"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            </Link>
            <h1 className="text-[16px] mt-[8px] text-[#333]">SKINNY FIT JEANS</h1>
            <Link href="/product">
            <Image
              src={rating2}
              alt="rating"
              className="w-[127px] mx-auto h-[16px] md:w-[150px] md:h-[19px]"
            />
            </Link>
            <div className="flex justify-center items-center">
              <h1 className="text-[20px] font-bold">$240</h1>
              <h1 className="text-[16px] line-through ml-[8px]">$260</h1>
              <div className="bg-red-500 text-white px-[8px] py-[2px] rounded-[3px] text-[12px]">-20%</div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="w-[198px] md:w-[295px] text-center">
          <Link href="/product">
            <Image
              src={Arrival3}
              alt="arrival3"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            </Link>
            <h1 className="text-[16px] mt-[8px] text-[#333]">CHECKERED SHIRT</h1>
            <Link href="/product">
            <Image
              src={rating3}
              alt="rating"
              className="w-[127px] mx-auto h-[16px] md:w-[150px] md:h-[19px]"
            />
            </Link>
            <h1 className="text-[20px] font-bold">$180</h1>
          </div>

          {/* Item 4 */}
          <div className="w-[198px] md:w-[295px] text-center">
          <Link href="/product">
            <Image
              src={Arrival4}
              alt="arrival4"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            </Link>
            <h1 className="text-[16px] mt-[8px] text-[#333]">SLEEVE STRIPED T-SHIRT</h1>
            <Link href="/product">
            <Image
              src={rating4}
              alt="rating"
              className="w-[127px] mx-auto h-[16px] md:w-[150px] md:h-[19px]"
            />
            </Link>
            <div className="flex justify-center items-center">
              <h1 className="text-[20px] font-bold">$130</h1>
              <h1 className="text-[16px] line-through ml-[8px]">$160</h1>
              <div className="bg-red-500 text-white px-[8px] py-[2px] rounded-[3px] text-[12px]">-30%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[24px] mx-4">
      <Link href="/product">
        <button className="w-[300px] h-[46px] rounded-full border border-gray-500 hover:cursor-pointer hover:bg-black hover:text-white md:w-[218px] md:h-[52px]">View All</button>
        </Link>
      </div>

      <div className="my-[40px] md:w-[1260px] mx-auto">
        <hr />
      </div>

      {/* Top Selling Section */}
      <div>
        <div>
          <div className="flex justify-center items-center md:w-[1260px] mx-auto font-bold text-[32px] leading-[38.4px] w-[296px] h-[38px] pb-[32px]  md:h-[58px] md:text-5xl md:leading-[57.6px] md:pt-[72px] md:pb-[55px]">
            <h1 style={{ fontFamily: "integral" }}>TOP SELLING</h1>
          </div>
        </div>

        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Item 1 */}
            <div className="w-[198px] md:w-[295px] text-center">
              <Image
                src={sell1}
                alt="sell1"
                className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
              />
              <h1 className="text-[16px] mt-[8px] text-[#333]">VERTICAL STRIPED SHIRT</h1>
              <Image
                src={rating5}
                alt="rating"
                className="w-[127px] mx-auto h-[16px] md:w-[150px] md:h-[19px]"
              />
              <div className="flex justify-center items-center">
                <h1 className="text-[20px] font-bold">$212</h1>
                <h1 className="text-[16px] line-through ml-[8px]">$232</h1>
                <div className="bg-red-500 text-white px-[8px] py-[2px] rounded-[3px] text-[12px]">-20%</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="w-[198px] md:w-[295px] text-center">
              <Image
                src={sell2}
                alt="sell2"
                className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
              />
              <h1 className="text-[16px] mt-[8px] text-[#333]">COURAGE GRAPHIC T-SHIRT</h1>
              <Image
                src={rating6}
                alt="rating"
                className="w-[127px] mx-auto h-[16px] md:w-[150px] md:h-[19px]"
              />
              <h1 className="text-[20px] font-bold">$145</h1>
            </div>

            {/* Item 3 */}
            <div className="w-[198px] md:w-[295px] text-center">
              <Image
                src={sell3}
                alt="sell3"
                className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
              />
              <h1 className="text-[16px] mt-[8px] text-[#333]">LOOSE FIT BERMUDA SHORTS</h1>
              <Image
                src={rating7}
                alt="rating"
                className="w-[127px] mx-auto h-[16px] md:w-[150px] md:h-[19px]"
              />
              <h1 className="text-[20px] font-bold">$80</h1>
            </div>

            {/* Item 4 */}
            <div className="w-[198px] md:w-[295px] text-center">
              <Image
                src={sell4}
                alt="sell4"
                className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
              />
              <h1 className="text-[16px] mt-[8px] text-[#333]">FADED SKINNY JEANS</h1>
              <Image
                src={rating1}
                alt="rating"
                className="w-[127px] mx-auto h-[16px] md:w-[150px] md:h-[19px]"
              />
              <h1 className="text-[20px] font-bold">$210</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[24px] mx-4 mb-8">
        <Link href="/product">
        <button className="w-[300px] h-[46px] rounded-full  border border-gray-500 hover:cursor-pointer hover:bg-black hover:text-white  md:w-[218px] md:h-[52px]">View All</button>
        </Link>
      </div>
    </>
  );
}

export default NewArrivals;
