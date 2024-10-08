// ListProductCard.tsx
import React from "react";
import ProductImage from "@/components/plp/ProductImage/ProductImage";
import ProductDetails from "@/components/plp/ProductDetails/ProductDetails";
import Button from "@/components/common/Button";
import Typography from "./Typography";

type ProductCardProps = {
  product: {
    id: number;
    productName: string;
    description: string;
    price: number;
    originalPrice?: number | null;
    discount?: string | null;
    imageUrl: string;
  }; // Add this prop to toggle between grid and list view
};

const ListProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex items-center justify-between bg-[#F4F5F7] p-3 md:p-4 rounded-md shadow">
      {/* Image on the left */}
      <div className="">
        <ProductImage
          imageUrl={product.imageUrl}
          productName={product.productName}
          width={1440}
          height={328}
          className="h-48 w-full object-contain"
        />
      </div>

      {/* Product Details on the right */}
      <div className="flex flex-col md:flex-row justify-between w-4/5 pl-4">
        {/* Product Information */}
        <div className="p-2 md:p-4 flex flex-col gap-2">
          <Typography
            variant="p"
            text={`${product.productName}`}
            className="text-xs md:text-lg font-semibold text-black font-poppins "
          />
          <Typography
            variant="p"
            text={`${product.description}`}
            className="text-xs md:text-lg text-gray-500 font-medium font-poppins "
          />
        </div>
        <div className="p-2 md:p-4">
          <Typography
            variant="p"
            text={`Rp.${product.price}`}
            className="text-xs md:text-lg font-semibold text-black font-poppins "
          />

          {/* Always Visible Button in List View */}
          <Button
            variant="AddToCart"
            text="Add to cart"
            className="bg-[#B88E2F] text-white py-2 mt-2 text-xs md:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default ListProductCard;
