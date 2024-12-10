"use client";
import React from "react";
import "@/app/css/satoshi.css";
import Image from "next/image";
import emailIcone from "@/app/assets/emailIcon.png";
import logo from "@/app/assets/Logo.png";
import tw from "@/app/assets/twiter.png";
import fb from "@/app/assets/fb.png";
import ig from "@/app/assets/ig.png";
import gh from "@/app/assets/gh.png";
import visa from "@/app/assets/visa.png";
import master from "@/app/assets/master.png";
import paypal from "@/app/assets/paypal.png";
import applepay from "@/app/assets/applepay.png";
import gpay from "@/app/assets/gpay.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#F0F0F0] py-10 md:py-16 md:w-[1260px] mx-auto relative">
        {/* Subscription Section */}
        <div className="absolute top-[-160px] sm:top-[-70px] left-0 right-0 mx-auto max-w-[90%] md:max-w-[80%] bg-black text-white rounded-lg py-8 md:py-6 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between z-10">
          <h1
            className="text-[20px] font-bold text-center leading-[30px] md:text-[28px] md:leading-[38px] md:w-[60%]"
            style={{ fontFamily: "integral" }}
          >
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="mt-6 md:mt-0 flex flex-col gap-4 w-full md:w-auto">
            <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm">
              <Image src={emailIcone} alt="Email Icon" width={20} height={20} />
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full text-gray-700 outline-none"
              />
            </div>
            <button className="w-full bg-white text-black font-medium py-2 rounded-full shadow-md">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Footer Main Section */}
        <footer className="mt-24 px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
            {/* Left Column */}
            <div className="flex flex-col items-start">
              <Image src={logo} alt="Logo" width={160} height={25} />
              <p className="mt-4 text-sm text-gray-600 md:w-[60%]">
                We have clothes that suit your style and which you’re proud to wear. From women to men.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Image src={tw} alt="Twitter" width={28} height={28} />
                <Image src={fb} alt="Facebook" width={28} height={28} />
                <Image src={ig} alt="Instagram" width={28} height={28} />
                <Image src={gh} alt="GitHub" width={28} height={28} />
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 gap-8 mt-10 md:mt-0 md:grid-cols-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-gray-800 tracking-wide">COMPANY</h1>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>About</li>
                  <li>Features</li>
                  <li>Works</li>
                  <li>Career</li>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-gray-800 tracking-wide">HELP</h1>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Customer Support</li>
                  <li>Features</li>
                  <li>Works</li>
                  <li>Career</li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-gray-800 tracking-wide">FAQ</h1>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Account</li>
                  <li>Manage Deliveries</li>
                  <li>Orders</li>
                  <li>Payment</li>
                </ul>
              </div>
              {/* Column 4 */}
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-gray-800 tracking-wide">RESOURCES</h1>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Free eBook</li>
                  <li>Development Tutorial</li>
                  <li>How to - Blog</li>
                  <li>YouTube Playlist</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-gray-300" />

          {/* Footer Bottom Section */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-gray-600">© 2000-2021, All rights reserved</p>
            <div className="flex items-center gap-4">
              <Image src={visa} alt="Visa" width={45} height={30} />
              <Image src={master} alt="MasterCard" width={45} height={30} />
              <Image src={paypal} alt="PayPal" width={45} height={30} />
              <Image src={applepay} alt="Apple Pay" width={45} height={30} />
              <Image src={gpay} alt="Google Pay" width={45} height={30} />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
