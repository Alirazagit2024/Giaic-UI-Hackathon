"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import X from "@/app/assets/X.png";
import cross from "@/app/assets/cross.png";
import hamburger from "@/app/assets/hamburgermenu.png";
import Logo from "@/app/assets/Logo.png";
import searchIcon from "@/app/assets/searchIcon.png";
import Cart from "@/app/assets/cartIcon.png";
import profile from "@/app/assets/profileIcon.png";
import dropdown from "@/app/assets/dropDownIcon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative md:w-[1260px] mx-auto border-b border-gray-400">
      {/* Banner */}
      <div className="bg-black text-white">
        <div className="flex justify-center items-center text-xs mx-auto gap-4 py-2 md:py-3">
          <div className="text-center flex-grow">
            Sign up and get 20% off your first order.{" "}
            <Link href="/" className="underline">
              Sign Up Now
            </Link>
          </div>
          <div className="cursor-pointer hidden md:block md:absolute md:right-8">
            <Image src={cross} alt="Close" />
          </div>
        </div>
      </div>

      {/* Small Screen Navbar (Hamburger menu, Logo, Icons) */}
      <div className="flex justify-between items-center bg-white p-4 md:hidden">
        <div className="flex gap-4 items-center">
          <Image
            src={hamburger}
            alt="Hamburger Menu"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleMenu}
          />
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-[126px] h-[18px] " />
          </Link>
        </div>

        <div className="flex gap-3">
          <Image src={searchIcon} alt="Search" className="w-6 h-6" />
          <Image src={Cart} alt="Cart" className="w-6 h-6" />
          <Image src={profile} alt="Profile" className="w-6 h-6" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-10">
          <div className="flex justify-between items-center p-4">
            <Image
              src={Logo}
              alt="Logo"
              className="w-[126px] h-[18px] text-black"
            />
            <div className="cursor-pointer" onClick={toggleMenu}>
              <Image src={X} alt="Close" className="w-6 h-6" />
            </div>
          </div>
          <ul className="flex flex-col items-center">
            <li className="py-4">
              <Link href="/">Shop</Link>
            </li>
            <li className="py-4">
              <Link href="/sale">On Sale</Link>
            </li>
            <li className="py-4">
              <Link href="/category">New Arrivals</Link>
            </li>
            <li className="py-4">
              <Link href="/brands">Brands</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Large Screen Navbar */}
      <div className="hidden md:flex justify-between items-center bg-white text-black py-4 px-16 z-20">
        <div className="flex gap-12">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-[160px] h-[24px] " />
          </Link>
          <ul className="flex gap-12 text-lg font-medium">
            <li className="relative">
              <Link href="/category">Shop</Link>
              <Image
                src={dropdown}
                alt="Dropdown"
                className="absolute top-3 right-0 left-12 w-3"
              />
            </li>
            <li>On Sale</li>
            <li>
              <Link href="/category">New Arrivals</Link>
            </li>
            <li>Brands</li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 w-[377px]">
          <Image src={searchIcon} alt="Search" className="w-6 h-6 opacity-40" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent w-[300px] px-4 py-2 text-gray-500 outline-none"
          />
        </div>

        {/* Icons (Cart, Profile) */}
        <div className="flex gap-4">
          <Link href="/cart">
            <Image
              src={Cart}
              alt="Cart"
              className="w-5 h-5 cursor-pointer hover:opacity-50"
            />
          </Link>
          <Image
            src={profile}
            alt="Profile"
            className="w-5 h-5 cursor-pointer hover:opacity-50"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
