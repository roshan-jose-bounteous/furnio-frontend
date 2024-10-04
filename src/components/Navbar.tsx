import LikeIcon from "@/public/assets/icons/LikeIcon";
import ProfileIcon from "@/public/assets/icons/ProfileIcon";
import SearchIcon from "@/public/assets/icons/SearchIcon";
import ShoppingCart from "@/public/assets/icons/ShoppingCart";
import Image from "next/image";
import logo from "@/public/assets/images/Logo.png";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white p-4">
        <div className="my-2 mx-12 flex justify-between items-center ">
          <div className="flex flex-row justify-center items-center gap-1 ">
            <Image
              src={logo} // Path to the image
              alt="My Store Logo"
              width={45} // Specify the width
              height={32} // Specify the height
              className="" // Add some margin to the right
            />
            <p className="text-black text-3xl font-bold font-montserrat">
              Furnio
            </p>
          </div>
          <div className="flex gap-14 items-center">
            <Link className="font-poppins font-medium text-lg" href="./Home">
              Home
            </Link>
            <Link className="font-poppins font-medium text-lg" href="./Shop">
              Shop
            </Link>
            <Link className="font-poppins font-medium text-lg" href="./About">
              About
            </Link>
            <Link className="font-poppins font-medium text-lg" href="./Contact">
              Contact
            </Link>
          </div>
          <div className="flex gap-14 items-center ">
            <ProfileIcon />
            <SearchIcon />
            <LikeIcon />
            <ShoppingCart />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
