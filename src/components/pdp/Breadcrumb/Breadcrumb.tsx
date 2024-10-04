import React from "react";
import Typography from "../../common/Typography";
import RightBreadcrumb from "@/public/assets/icons/RightBreadcrumb";
import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";

const Breadcrumb = () => {
  return (
    <div className="bg-[#F9F1E7] flex flex-row justify-start items-center gap-5 py-8 px-40">
      <Typography
        variant="p"
        text="Home"
        className="font-poppins text-[#9F9F9F]"
      />
      <RightBreadcrumb />
      <Typography
        variant="p"
        text="Shop"
        className="font-poppins text-[#9F9F9F]"
      />
      <RightBreadcrumb />
      <VerticalDividerLine />
      <Typography variant="p" text="Asgaard Sofa" className="font-poppins" />
    </div>
  );
};

export default Breadcrumb;
