"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LikeIcon from "@/public/assets/icons/LikeIcon";
import ProfileIcon from "@/public/assets/icons/ProfileIcon";
import SearchIcon from "@/public/assets/icons/SearchIcon";
import ShoppingCart from "@/public/assets/icons/ShoppingCart";
import logo from "@/public/assets/images/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import menu icons
import Typography from "./common/Typography";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="my-2 mx-4 md:mx-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="My Store Logo"
            width={45}
            height={32}
            className=""
          />
          <p className="text-black text-3xl font-bold font-montserrat">
            Furnio
          </p>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex gap-14 items-center">
          <Link className="font-poppins font-medium text-lg" href="/Home">
            Home
          </Link>
          <Link className="font-poppins font-medium text-lg" href="/plp">
            Shop
          </Link>
          <Link className="font-poppins font-medium text-lg" href="/About">
            About
          </Link>
          <Link className="font-poppins font-medium text-lg" href="/Contact">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-8 items-center">
          <ProfileIcon />
          <SearchIcon />
          <LikeIcon />
          <ShoppingCart />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          {isMobileMenuOpen ? (
            <AiOutlineClose
              size={28}
              className="cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <AiOutlineMenu
              size={28}
              className="cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button for Mobile Menu */}
        <div className="flex justify-end p-4">
          <AiOutlineClose
            size={28}
            className="cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        <div className="flex flex-col items-center mt-12 space-y-6">
          <Link
            className="font-poppins font-medium text-lg"
            href="/Home"
            onClick={toggleMobileMenu}
          >
            <Typography variant="p" text="Home" />
          </Link>
          <Link
            className="font-poppins font-medium text-lg"
            href="/plp"
            onClick={toggleMobileMenu}
          >
            <Typography variant="p" text="Shop" />
          </Link>
          <Link
            className="font-poppins font-medium text-lg"
            href="/About"
            onClick={toggleMobileMenu}
          >
            <Typography variant="p" text="About" />
          </Link>
          <Link
            className="font-poppins font-medium text-lg"
            href="/Contact"
            onClick={toggleMobileMenu}
          >
            <Typography variant="p" text="Contact" />
          </Link>
          {/* Add mobile versions of the icons */}
          <div className="flex gap-8 items-center">
            <ProfileIcon />
            <SearchIcon />
            <LikeIcon />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
