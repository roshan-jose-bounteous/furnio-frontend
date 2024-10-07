// src/components/ProductImage.tsx
import React from "react";
import Image from "next/image";
import { ProductImageProps } from "@/types/types";

const ProductImage = ({
  imageUrl,
  productName,
  width,
  height,
}: ProductImageProps) => {
  return (
    <Image
      src={imageUrl}
      alt={productName}
      width={width}
      height={height}
      className="w-full h-80 object-cover"
    />
  );
};

export default ProductImage;
