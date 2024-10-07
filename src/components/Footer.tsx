import React from "react";
import Typography from "./common/Typography";
import Button from "./common/Button";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-16 px-10 md:px-40 py-16 ">
      <div className="flex flex-col items-start gap-4 md:gap-12">
        <Typography
          variant="p"
          text="Furniro"
          className="text-2xl font-poppins font-bold"
        />
        <div>
          <Typography
            variant="p"
            text="400 University Drive Suite 200 Coral Gables,"
            className="text-[#9F9F9F] font-poppins w-[90%]"
          />
          <Typography
            variant="p"
            text="FL 33134 USA"
            className="text-[#9F9F9F] font-poppins"
          />
        </div>
      </div>
      <div className="flex flex-row gap-36 pr-2">
        <div className="flex flex-col items-start gap-6 md:gap-14 ">
          <Typography
            variant="p"
            className="text-[#9F9F9F] font-poppins font-medium"
            text="Links"
          />
          <Typography
            variant="p"
            className=" font-poppins font-medium"
            text="Home"
          />
          <Typography
            variant="p"
            className=" font-poppins font-medium"
            text="Shop"
          />
          <Typography
            variant="p"
            className=" font-poppins font-medium"
            text="About"
          />
          <Typography
            variant="p"
            className=" font-poppins font-medium"
            text="Contact"
          />
        </div>
        <div className="flex flex-col items-start gap-6 md:gap-14 ">
          <Typography
            variant="p"
            className="text-[#9F9F9F] font-poppins font-medium"
            text="Help"
          />
          <Typography
            variant="p"
            className=" font-poppins font-medium"
            text="Payment Options"
          />
          <Typography
            variant="p"
            className=" font-poppins font-medium"
            text="Returns"
          />
          <Typography
            variant="p"
            className=" font-poppins font-medium"
            text="Privacy Policies"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gao-6 md:gap-12 ">
        <Typography
          variant="p"
          className="text-[#9F9F9F] font-poppins font-medium"
          text="Newsletter"
        />
        <div className="flex flex-row justify-start gap-5">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="w-full font-poppins text-sm pr-10 text-gray-500 placeholder-gray-500 focus:outline-none focus:text-black bg-transparent border-b border-black focus:border-black"
          />
          <Button variant="Subscribe" text="SUBSCRIBE" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
