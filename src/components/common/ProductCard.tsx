import React from "react";
import ProductImage from "@/components/plp/ProductImage/ProductImage";
import ProductDiscount from "@/components/plp/ProductDiscount/ProductDiscount";
import ProductDetails from "@/components/plp/ProductDetails/ProductDetails";
import Button from "@/components/common/Button";
import Share from "@/public/assets/icons/Share";
import Compare from "@/public/assets/icons/Compare";
import WhiteHeart from "@/public/assets/icons/WhiteHeart";
import Typography from "@/components/common/Typography";
import { ProductCardProps } from "@/types/types";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="relative group">
      <div className="relative overflow-hidden">
        <ProductImage
          imageUrl={product.imageURL}
          productName={product.productName}
          width={1440}
          height={328}
          className="w-full h-80 object-cover"
        />
        {product.discount && <ProductDiscount discount={product.discount} />}
        <ProductDetails
          productName={product.productName}
          description={product.description}
          price={product.price}
          originalPrice={product.originalPrice}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-5">
          <Button
            variant="AddToCart"
            text="Add to cart"
            className="text-[#B88E2F] bg-white"
          />
          <div className="flex justify-between gap-5 text-white">
            <button className="flex items-center space-x-1 hover:text-gray-400">
              <Share />
              <Typography variant="p" className="font-poppins" text="Share" />
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-400">
              <Compare />
              <Typography variant="p" className="font-poppins" text="Compare" />
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-400">
              <WhiteHeart />
              <Typography variant="p" className="font-poppins" text="Like" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
