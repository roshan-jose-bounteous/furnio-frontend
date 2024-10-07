import AdditionalImages from "@/components/pdp/AdditionalImages/AdditionalImages";
import Breadcrumb from "@/components/pdp/Breadcrumb/Breadcrumb";
import Description from "@/components/pdp/Description/Description";
import ProductDescription from "@/components/pdp/ProductDescription/ProductDescription";
import RelatedProducts from "@/components/pdp/RelatedProducts/RelatedProducts";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <Description />
      <div className="border-1 border-b border-[#D9D9D9]" />
      <ProductDescription />
      <AdditionalImages />
      <div className="border-1 border-b border-[#D9D9D9]" />

      <RelatedProducts />
    </div>
  );
};

export default page;
