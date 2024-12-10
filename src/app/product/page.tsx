import React from "react";
import Image from "next/image";
import Pfirst from "@/app/assets/image 1.png";
import Psec from "@/app/assets/image 2.png";
import Pthird from "@/app/assets/image 5.png";
import Pfor from "@/app/assets/image 6.png";
import Link from "next/link";
import Pro1 from "../components/pro1";

// Static product details
function ProductDetailPage() {
  return (
    <div className="md:w-[1260px] mx-auto px-4 lg:px-12 mt-2 mb-40">
      {/* Breadcrumb */}
      <h1 className="text-sm text-gray-500 mb-4">
        Home / Shop / Men / T-Shirts
      </h1>

      <div className="flex flex-wrap lg:flex-nowrap items-start gap-4">
        {/* Sidebar Thumbnails */}
        <div className="flex flex-col sm:gap-3 gap-2 lg:w-[120px]">
          <div className="rounded-lg p-1">
            <Image
              src={Pfirst}
              alt="T-shirt front"
              width={90}
              height={120}
              className="rounded-xl h-[70px] w-[56px] sm:h-[150px] sm:w-[140px] hover:border-2 hover:border-black"
            />
          </div>
          <div className="rounded-lg p-1">
            <Image
              src={Psec}
              alt="T-shirt side"
              width={90}
              height={120}
              className="rounded-xl h-[70px] w-[56px] sm:h-[150px] sm:w-[140px] hover:border-2 hover:border-black"
            />
          </div>
          <div className="rounded-lg p-1">
            <Image
              src={Pfor}
              alt="T-shirt back"
              width={90}
              height={120}
              className="rounded-xl h-[70px] w-[56px] sm:h-[150px] sm:w-[140px] hover:border-2 hover:border-black"
            />
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1 lg:w-[500px]">
          <Image
            src={Pfirst}
            alt="T-shirt main"
            width={400}
            height={400}
            className="rounded-md w-full sm:w-[500px] sm:h-[500px]"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 max-w-lg text-center sm:text-left flex  flex-col justify-center sm:items-start items-center">
          <h1 className="text-[28px] sm:text-[36px] font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-500 text-sm">(4.5/5)</span>
          </div>
          <div className="flex items-center gap-4 my-4">
            <p className="text-2xl font-semibold">$260</p>
            <p className="line-through text-gray-400">$300</p>
            <p className="text-red-500 font-bold">-40%</p>
          </div>
          <p className="text-gray-500 mb-6">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Colors */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Colors</h3>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-700 border border-gray-300 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-300 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-blue-700 border border-gray-300 cursor-pointer"></div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Choose Size</h3>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-black hover:text-white cursor-pointer">
                Small
              </div>
              <div className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-black hover:text-white cursor-pointer">
                Medium
              </div>
              <div className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-black hover:text-white cursor-pointer">
                Large
              </div>
              <div className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-black hover:text-white cursor-pointer">
                X-Large
              </div>
            </div>
          </div>

          {/* Quantity and Cart */}
          <div className="flex sm:w-[300px] items-center justify-between gap-4 mt-6">
            {/* Quantity Selector */}
            <div className="flex items-center border rounded-lg sm:w-auto">
              <button className="sm:w-12 w-8 py-2 bg-gray-200 hover:bg-gray-300 text-lg font-semibold">
                -
              </button>
              <span className="sm:w-12 w-8 text-center py-2 text-xl font-medium">1</span>
              <button className="sm:w-12 w-8 py-2 bg-gray-200 hover:bg-gray-300 text-lg font-semibold">
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <Link href="/cart">
              <button className="bg-black text-white border border-black px-8 py-3 rounded-lg w-[180px] sm:w-[300px] text-xl font-semibold hover:bg-white hover:text-black">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Pro1/>
    </div>
  );
}

export default ProductDetailPage;
