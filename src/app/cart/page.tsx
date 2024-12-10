import React from "react";
import Image from "next/image";
import Link from "next/link";
import A1 from "@/app/assets/arrival1.png";
import A2 from "@/app/assets/arrival2.png";

function CartPage() {
  return (
    <div className="w-full md:w-[1260px]  mx-auto px-1 lg:px-20">
      <h1 className="text-sm lg:text-base mt-4  px-4">
        Home / Cart
      </h1>
      
      <div className="mt-10 border border-style  border-black p-2 sm:p-5">
        {/* Table Headers (hidden on small screens) */}
        <div className="flex lg:flex gap-0 sm:gap-2 items-center justify-between text-white mb-8 py-2  rounded-xl font-semibold   ">
          <h1 className="text-sm lg:text-base w-1/4 text-center bg-black py-5 border-style">Product</h1>
          <h1 className="text-sm lg:text-base w-1/4 text-center bg-black py-5 border-style">Price</h1>
          <h1 className="text-sm lg:text-base w-1/4 text-center bg-black py-5 border-style">Quantity</h1>
          <h1 className="text-sm lg:text-base w-1/4 text-center bg-black py-5 border-style">Subtotal</h1>
        </div>

        {/* Product Row 1 */}
        <div className="flex  lg:flex-row items-center justify-between gap-4 lg:gap-8 mb-6 border-b border-black pb-4">
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <Image src={A1} alt="pc-icon" width={54} height={54} className="w-20 h-20" />
            <span className="text-sm lg:text-base text-center">Black T-Shirt</span>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <span className="text-sm lg:text-base">$650</span>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <p>2pcs</p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <span className="text-sm lg:text-base">$1300</span>
          </div>
        </div>

        {/* Product Row 2 */}
        <div className="flex lg:flex-row items-center justify-between gap-4 lg:gap-8 mb-6 border-b border-black pb-4">
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <Image src={A2} alt="gamepad-icon" width={54} height={54} className="w-20 h-20" />
            <span className="text-sm lg:text-base text-center">Blue Jeans</span>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <span className="text-sm lg:text-base">$650</span>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <p>1pcs</p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/4">
            <span className="text-sm lg:text-base">$650</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 lg:gap-8 mt-6 justify-between flex-col lg:flex-row">
          <button className="w-full lg:w-[218px] h-[58px] border border-black bg-white hover:bg-black hover:text-white rounded-md text-sm lg:text-base mb-4 lg:mb-0">
            Return To Shop
          </button>
          <button className="w-full lg:w-[195px] h-[56px] border border-black bg-white hover:bg-black hover:text-white rounded-md text-sm lg:text-base">
            Update Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-6  mb-[174px]">
        {/* Coupon Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-[450px]">
          <input
            type="number"
            className="w-full px-5 h-[56px] border border-black rounded-md mb-4 md:mb-0"
            placeholder="Coupon Code"
          />
          <button className="w-full md:w-[211px] h-[56px] border border-black bg-black hover:bg-white hover:text-black text-[#FAFAFA] rounded-md">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Section */}
        <div className="w-full md:w-[470px] h-auto border border-black rounded-md p-6">
          <h1 className="font-semibold text-lg mb-6">Cart Total</h1>

          {/* Subtotal Row */}
          <div className="flex items-center justify-between text-sm mb-4">
            <h3 className="text-gray-700">Subtotal</h3>
            <span className="font-semibold text-gray-900">$1950</span>
          </div>

          {/* Shipping Row */}
          <div className="flex items-center justify-between text-sm mb-4">
            <h3 className="text-gray-700">Shipping</h3>
            <span className="font-semibold text-gray-900">Free</span>
          </div>

          {/* Total Row */}
          <div className="flex items-center justify-between text-sm mb-6">
            <h3 className="text-gray-700">Total</h3>
            <span className="font-semibold text-gray-900">$1950</span>
          </div>

          {/* Checkout Button */}
          <div className="flex items-center justify-center">
            <Link href="/checkout">
              <button className="w-full md:w-[260px] h-[56px] py-3 px-3 border border-black bg-black hover:bg-white hover:text-black text-[#FAFAFA] rounded-md font-semibold">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
