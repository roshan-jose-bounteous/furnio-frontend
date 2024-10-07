import Typography from "@/components/common/Typography";
import CustomerGuarantee from "@/public/assets/icons/CustomerGuarantee";
import CustomerSupport from "@/public/assets/icons/CustomerSupport";
import Shipping from "@/public/assets/icons/Shipping";
import Trophy from "@/public/assets/icons/Trophy";
import React from "react";

const PreFooter = () => {
  return (
    <div className="bg-[#FAF3EA] flex flex-col  md:flex-row items-start  md:justify-between md:items-center px-10 md:px-28 py-20 gap-5 md:gap-0">
      <div className="flex flex-row gap-3">
        <Trophy />
        <div className="flex flex-col gap-1 justify-between">
          <Typography
            variant="p"
            className="font-semibold font-poppins text-2xl "
            text="High Quality"
          />
          <Typography
            variant="p"
            className="text-[#898989] font-medium font-poppins text-lg"
            text="crafted from top materials"
          />
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <CustomerGuarantee />
        <div className="flex flex-col gap-1 justify-between">
          <Typography
            variant="p"
            className="font-semibold font-poppins text-2xl "
            text="Warranty Protection"
          />
          <Typography
            variant="p"
            className="text-[#898989] font-medium font-poppins text-lg"
            text="over 2 years"
          />
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <Shipping />
        <div className="flex flex-col gap-1 justify-between">
          <Typography
            variant="p"
            className="font-semibold font-poppins text-2xl "
            text="Free Shipping"
          />
          <Typography
            variant="p"
            className="text-[#898989] font-medium font-poppins text-lg"
            text="order over 150 $"
          />
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <CustomerSupport />
        <div className="flex flex-col gap-1 justify-between">
          <Typography
            variant="p"
            className="font-semibold font-poppins text-2xl "
            text="24/7 Support"
          />
          <Typography
            variant="p"
            className="text-[#898989] font-medium font-poppins text-lg"
            text="Dedicated Support"
          />
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
