import React from "react";
import ImageSection from "../ImageSection/ImageSection";
import ProductDetails from "../ProductDetails/ProductDetails";

const Description = () => {
  return (
    <div className="px-4 md:px-40 flex flex-col md:flex-row py-10 justify-start gap-10">
      <ImageSection />
      <ProductDetails />
    </div>
  );
};

export default Description;
