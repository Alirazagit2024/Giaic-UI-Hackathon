import React from 'react';
import Image from 'next/image';
import sell1 from "@/app/assets/sell1.png";
import rat1 from "@/app/assets/rating5.png";
import rat2 from "@/app/assets/rating6.png";
import rat3 from "@/app/assets/rating1.png";
import rat4 from "@/app/assets/rating7.png";
import sell2 from "@/app/assets/sell2.png";
import sell3 from "@/app/assets/sell3.png";
import sell4 from "@/app/assets/sell4.png";

export default function Pro1() {
    return (
        <>
            {/* TOP SELLING */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-20 md:mx-24 md:gap-6">
                {/* Item 1 */}
                <div className="flex flex-col justify-start md:gap-1">
                    <Image
                        src={sell1} 
                        alt="Vertical Striped Shirt"
                        className="w-[198px] h-[200px] rounded-lg md:w-[295px] md:h-[264px]"
                        width={198} height={200}
                    />
                    <h1 className="font-bold text-sm mt-2 md:text-base">VERTICAL STRIPED SHIRT</h1>
                    <Image
                        src={rat1} 
                        alt="Rating 5"
                        className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
                        width={127} height={16}
                    />
                    <div className="flex flex-row items-center gap-2">
                        <h1 className="font-bold text-lg md:text-xl">$212</h1>
                        <h1 className="font-bold text-lg line-through opacity-50 md:text-xl">$232</h1>
                        <div className="px-2 py-1 bg-red-100 text-red-500 rounded-full text-xs md:text-sm">
                            -20%
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col justify-start md:gap-1">
                    <Image
                        src={sell2} 
                        alt="Courage Graphic T-Shirt"
                        className="w-[198px] h-[200px] rounded-lg md:w-[295px] md:h-[264px]"
                        width={198} height={200}
                    />
                    <h1 className="font-bold text-sm mt-2 md:text-base">COURAGE GRAPHIC T-SHIRT</h1>
                    <Image
                        src={rat2} 
                        alt="Rating 6"
                        className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
                        width={127} height={16}
                    />
                    <h1 className="font-bold text-lg mt-1 md:text-xl">$145</h1>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col justify-start md:gap-1">
                    <Image
                        src={sell3} 
                        alt="Loose Fit Bermuda Shorts"
                        className="w-[198px] h-[200px] rounded-lg md:w-[295px] md:h-[264px]"
                        width={198} height={200}
                    />
                    <h1 className="font-bold text-sm mt-2 md:text-base">FIT BERMUDA SHORTS</h1>
                    <Image
                        src={rat3} 
                        alt="Rating 7"
                        className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
                        width={127} height={16}
                    />
                    <h1 className="font-bold text-lg mt-1 md:text-xl">$80</h1>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col justify-start md:gap-1">
                    <Image
                        src={sell4} 
                        alt="Faded Skinny Jeans"
                        className="w-[198px] h-[200px] rounded-lg md:w-[295px] md:h-[264px]"
                        width={198} height={200}
                    />
                    <h1 className="font-bold text-sm mt-2 md:text-base">FADED SKINNY JEANS</h1>
                    <Image
                        src={rat4} 
                        alt="Rating 1"
                        className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
                        width={127} height={16}
                    />
                    <h1 className="font-bold text-lg mt-1 md:text-xl">$210</h1>
                </div>
            </div>

            {/* View All Button */}
            <div className="flex justify-center items-center mt-6 mx-4">
                <button className="w-40 h-12 border border-black mb-10 sm:mb-0  rounded-full hover:bg-black hover:text-white md:w-56 md:h-14">
                    View All
                </button>
            </div>
        </>
    );
}
