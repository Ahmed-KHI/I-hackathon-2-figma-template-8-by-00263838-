"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client side
  }, []);

  if (!isClient) {
    return null; // Prevent render until the component is mounted on the client side
  }

  return (
    <header className="shadow">
      {/* Top Line */}
      <div className="bg-indigo-950 text-white text-sm">
        <div className="container opacity-70 mx-auto flex justify-between items-center px-4 py-2">
          <span>✓ Free Shipping On All Orders Over $50</span>
          <div className="flex items-center gap-4">
            <div className="hover:underline flex items-center">
              Eng
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <Link href="/Faqs" className="hover:underline">
              FAQs
            </Link>
            <Link href="#" className="hover:underline">
              Need Help
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Line: Logo and Cart */}
      <div className="bg-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo Centered */}
          <div className="flex-1 text-center">
            <div className="flex space-x-2 justify-center sm:justify-start">
              <Image src="/Logo Icon.png" alt="logo" width={40} height={40} />
              <span className="text-xl font-bold">Comforty</span>
            </div>
          </div>
          <Link href="/Cart">
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
              {/* Cart Icon */}
              <CiShoppingCart className="h-6 w-6 text-indigo-900" />
              {/* Cart Text */}
              <span className="text-indigo-900 font-medium">Cart</span>
              {/* Badge */}
              <span className="bg-teal-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>
          </Link>
          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <FaBars
              size={20}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-gray-700"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            />
          </div>
        </div>
      </div>

      {/* Bottom Line: Navigation Menu */}
      <nav className="bg-white border-t border-b-2 border-gray-300">
        <div className="container mx-auto w-full h-[74px] flex justify-between items-center px-4 py-4">
          {/* Menu Items */}
          <ul className="flex space-x-8 text-gray-700 w-full justify-center sm:justify-start">
            <li>
              <Link href="/" className="text-teal-500 hover:text-teal-950">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/SingleProduct"
                className="text-teal-500 hover:text-teal-950"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/Product"
                className="text-teal-500 hover:text-teal-950"
              >
                Product
              </Link>
            </li>
            <li>
              <Link href="#" className="text-teal-500 hover:text-teal-950">
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/AboutUs"
                className="text-teal-500 hover:text-teal-950"
              >
                About
              </Link>
            </li>
          </ul>

          <div className="mr-4 hover:underline hidden sm:block text-nowrap">
            <Link href="/Contact">
              <p>Contact: (808) 555-0111</p>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden flex flex-col items-center bg-teal-500 py-3 space-y-2 text-gray-700 transition-all ease-in-out duration-300"
        >
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>
          <Link href="/SingleProduct" className="hover:text-teal-600">
            Shop
          </Link>
          <Link href="/Product" className="hover:text-teal-600">
            Product
          </Link>
          <Link href="/Cart" className="hover:text-teal-600">
            Pages
          </Link>
          <Link href="/AboutUs" className="hover:text-teal-600">
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
