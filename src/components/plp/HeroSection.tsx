import { FC } from "react";
import Typography from "../common/Typography";
import RightBreadcrumb from "@/public/assets/icons/RightBreadcrumb";

const HeroSection = () => {
  return (
    <div className='h-96 bg-[url("/assets/images/HeroBackground.png")] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-4'>
      <Typography variant="h1" className="font-poppins text-5xl font-medium">
        Shop
      </Typography>
      <div className="flex flex-row items-center justify-center gap-2 ">
        <Typography variant="p" className="font-poppins text-lg font-medium">
          Home
        </Typography>
        <RightBreadcrumb />
        <Typography variant="p" className="font-poppins text-lg">
          Shop
        </Typography>
      </div>
    </div>
  );
};

export default HeroSection;
