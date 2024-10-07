import Breadcrumb from "@/components/pdp/Breadcrumb/Breadcrumb";
import Description from "@/components/pdp/Description/Description";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <Description />
      <div className="border-1 border-b border-[#D9D9D9]" />
    </div>
  );
};

export default page;
