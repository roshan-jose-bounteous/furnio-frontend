// src/components/ProductImage.tsx
import React from "react";
import Image from "next/image";

type ProductImageProps = {
  imageUrl: string;
  productName: string;
};

const ProductImage = ({ imageUrl, productName }: ProductImageProps) => {
  return (
    <Image
      src={imageUrl}
      alt={productName}
      width={1440}
      height={328}
      className="w-full h-80 object-cover"
    />
  );
};

export default ProductImage;
