import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";
import YellowStar from "@/public/assets/icons/YellowStar";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="flex flex-col gap-3 py-2 w-1/2">
      <Typography
        variant="h1"
        className="font-poppins text-4xl"
        text="Asgaard Sofa"
      />
      <Typography
        variant="p"
        className="font-poppins text-2xl text-[#9F9F9F] font-medium"
        text="Rs. 250,000.00"
      />
      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-row items-center gap-2">
          <YellowStar />
          <YellowStar />
          <YellowStar />
          <YellowStar />
          <YellowStar />
        </div>
        <VerticalDividerLine />
        <Typography
          variant="p"
          text="5 Customer Review"
          className="font-poppins text-[#9F9F9F] text-xs"
        />
      </div>
      <Typography
        variant="p"
        className="font-poppins text-sm w-[80%]"
        text="Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."
      />
      <Typography
        variant="p"
        className="font-poppins text-sm text-[#9F9F9F]"
        text="Size"
      />
      <div className="flex flex-row justify-start items-center gap-3">
        <Button variant="Sizes" text="L" />
        <Button variant="Sizes" text="XL" />
        <Button variant="Sizes" text="XS" />
      </div>
      <Typography
        variant="p"
        className="font-poppins text-sm text-[#9F9F9F]"
        text="Color"
      />
      <div className="flex flex-row justify-start items-center gap-4">
        <Button variant="Colors" className="bg-[#816DFA]" />
        <Button variant="Colors" className="bg-black" />
        <Button variant="Colors" className="bg-[#B88E2F]" />
      </div>
      <div className="flex flex-row justify-start items-center gap-4">
        <Button
          variant="Quantity"
          className="flex flex-row justify-between gap-5"
        >
          <Typography variant="p" text="-" />
          <Typography variant="p" text="1" />
          <Typography variant="p" text="+" />
        </Button>
        <Button variant="Buy" className="" text="Add To Cart" />
        <Button variant="Buy" className="" text="+ Compare" />
      </div>
    </div>
  );
};

export default ProductDetails;
