// src/components/ProductImage.tsx
import React from "react";
import Image from "next/image";
import { ProductImageProps } from "@/types/types";

const ProductImage = ({
  imageUrl,
  productName,
  width,
  height,
  className,
}: ProductImageProps) => {
  return (
    <Image
      src={imageUrl}
      alt={productName}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ProductImage;
