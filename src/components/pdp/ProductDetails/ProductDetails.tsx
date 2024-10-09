"use client";
import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import FacebookIcon from "@/public/assets/icons/FacebookIcon";
import LinkedinIcon from "@/public/assets/icons/LinkedinIcon";
import TwitterIcon from "@/public/assets/icons/TwitterIcon";
import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";
import YellowStar from "@/public/assets/icons/YellowStar";
import React, { useState } from "react";
import { Product } from "@/types/types";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3 py-2 w-full md:w-1/2">
      <Typography
        variant="h1"
        className="font-poppins text-4xl"
        text={product.productName}
      />
      <Typography
        variant="p"
        className="font-poppins text-2xl text-[#9F9F9F] font-medium"
        text={`Rs. ${product.price.toLocaleString()}.00`}
      />
      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-row items-center gap-2">
          {Array(5).fill(<YellowStar />)}
        </div>
        <VerticalDividerLine />
        <Typography
          variant="p"
          text="5 Customer Reviews"
          className="font-poppins text-[#9F9F9F] text-xs"
        />
      </div>
      <Typography
        variant="p"
        className="font-poppins text-sm w-[80%]"
        text={product.information}
      />
      <Typography
        variant="p"
        className="font-poppins text-sm text-[#9F9F9F]"
        text="Size"
      />
      <div className="flex flex-row justify-start items-center gap-3">
        {["L", "XL", "XS"].map((size) => (
          <Button
            key={size}
            variant="Sizes"
            text={size}
            className={`${selectedSize === size ? "bg-[#B88E2F]" : ""}`}
            onClick={() => setSelectedSize(size)}
          />
        ))}
      </div>
      <Typography
        variant="p"
        className="font-poppins text-sm text-[#9F9F9F]"
        text="Color"
      />
      <div className="flex flex-row justify-start items-center gap-4">
        <Button
          variant="Colors"
          className={`bg-[#816DFA] ${
            selectedColor == "purple" ? "border-2 border-black" : ""
          }`}
          onClick={() => setSelectedColor("purple")}
        />
        <Button
          variant="Colors"
          className={`bg-black ${
            selectedColor == "black" ? "border-2 border-black" : ""
          }`}
          onClick={() => setSelectedColor("black")}
        />
        <Button
          variant="Colors"
          className={`bg-[#B88E2F] ${
            selectedColor == "orange" ? "border-2 border-black" : ""
          }`}
          onClick={() => setSelectedColor("orange")}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center gap-4 py-2">
        <Button
          variant="Quantity"
          className="flex flex-row justify-between gap-5 w-3/5 md:w-1/5"
        >
          <Typography variant="p" text="-" />
          <Typography variant="p" text="1" />
          <Typography variant="p" text="+" />
        </Button>
        <Button variant="Buy" className="w-3/5 md:w-2/5" text="Add To Cart" />
        <Button variant="Buy" className="w-3/5 md:w-2/5" text="+ Compare" />
      </div>
      <div className="border-b border-[#D9D9D9] border-1 my-6" />
      <div className="font-poppins py-2 flex flex-col gap-2 text-[#9F9F9F]">
        <div className="flex flex-row gap-2">
          <Typography variant="p" text="SKU" className="min-w-[100px]" />
          <Typography variant="p" text={`: ${product.SKU}`} /> {/* Use SKU */}
        </div>
        <div className="flex flex-row gap-2">
          <Typography variant="p" text="Category" className="min-w-[100px]" />
          <Typography variant="p" text={`: ${product.category}`} />{" "}
          {/* Use category */}
        </div>
        <div className="flex flex-row gap-2">
          <Typography variant="p" text="Tags" className="min-w-[100px]" />
          <Typography variant="p" text={`: ${product.tags}`} /> {/* Use tags */}
        </div>
        <div className="flex flex-row gap-2">
          <Typography variant="p" text="Share" className="min-w-[100px]" />
          <Typography variant="p" text=":" />
          <div className="flex flex-row gap-2">
            <FacebookIcon />
            <LinkedinIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
