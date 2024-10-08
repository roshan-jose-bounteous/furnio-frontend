import React from "react";
import ImageSection from "../ImageSection/ImageSection";
import ProductDetails from "../ProductDetails/ProductDetails";
import { DescriptionProps } from "@/types/types";

const Description: React.FC<DescriptionProps> = ({ product }) => {
  return (
    <div className="px-4 md:px-40 flex flex-col md:flex-row py-10 justify-start gap-10">
      <ImageSection descriptionImages={product.descriptionImages} />
      <ProductDetails product={product} />
    </div>
  );
};

export default Description;
