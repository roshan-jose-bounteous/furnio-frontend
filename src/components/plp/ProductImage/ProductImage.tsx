// src/components/ProductImage.tsx
import React from "react";
import Image from "next/image";

type ProductImageProps = {
  imageUrl: string;
  productName: string;
  width?:number;
  height?:number;
};

const ProductImage = ({ imageUrl, productName,width, height }: ProductImageProps) => {
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
