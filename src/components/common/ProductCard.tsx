import React from "react";
import ProductImage from "@/components/plp/ProductImage/ProductImage";
import ProductDiscount from "@/components/plp/ProductDiscount/ProductDiscount";
import ProductDetails from "@/components/plp/ProductDetails/ProductDetails";
import Button from "@/components/common/Button";
import Share from "@/public/assets/icons/Share";
import Compare from "@/public/assets/icons/Compare";
import WhiteHeart from "@/public/assets/icons/WhiteHeart";
import Typography from "@/components/common/Typography";
import Link from "next/link";

type ProductCardProps = {
  product: {
    id: number;
    productName: string;
    description: string;
    price: number;
    originalPrice?: number | null;
    discount?: string | null;
    imageUrl: string;
  };
  isGridView: boolean; // Add this prop to toggle between grid and list view
};

const ProductCard = ({ product, isGridView }: ProductCardProps) => {
  return (
    <Link href="/pdp">
      <div className={`relative group ${!isGridView ? "flex gap-6" : ""}`}>
        {/* If Grid View */}
        {isGridView ? (
          <div className="relative overflow-hidden">
            {/* Image and Discount */}
            <ProductImage
              imageUrl={product.imageUrl}
              productName={product.productName}
              width={1440}
              height={328}
            />
            {product.discount && (
              <ProductDiscount discount={product.discount} />
            )}
            {/* Product Details */}
            <ProductDetails
              productName={product.productName}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
            />
            {/* Hover effects only in grid view */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-5">
              <Button variant="AddToCart" text="Add to cart" />
              <div className="flex justify-between gap-5 text-white">
                <button className="flex items-center space-x-1 hover:text-gray-400">
                  <Share />
                  <Typography
                    variant="p"
                    className="font-poppins"
                    text="Share"
                  />
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-400">
                  <Compare />
                  <Typography
                    variant="p"
                    className="font-poppins"
                    text="Compare"
                  />
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-400">
                  <WhiteHeart />
                  <Typography
                    variant="p"
                    className="font-poppins"
                    text="Like"
                  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          // List View Layout
          <div className="flex flex-row items-start w-full h-1/2">
            {/* Image on the left */}
            <div className="w-1/3 object-contain">
              <ProductImage
                imageUrl={product.imageUrl}
                productName={product.productName}
                width={400}
                height={100}
              />
            </div>

            {/* Product Details on the right */}
            <div className="w-2/3">
              {/* Display Discount if available */}
              {product.discount && (
                <ProductDiscount discount={product.discount} />
              )}

              {/* Product Information */}
              <ProductDetails
                productName={product.productName}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
              />

              {/* Always Visible Buttons in List View */}
              <div className="flex gap-4 bg-[#F4F5F7]">
                <Button variant="AddToCart" text="Add to cart" />
                <button className="flex items-center space-x-1 text-black hover:text-gray-600">
                  <Share />
                  <Typography
                    variant="p"
                    className="font-poppins"
                    text="Share"
                  />
                </button>
                <button className="flex items-center space-x-1 text-black hover:text-gray-600">
                  <Compare />
                  <Typography
                    variant="p"
                    className="font-poppins"
                    text="Compare"
                  />
                </button>
                <button className="flex items-center space-x-1 text-black hover:text-gray-600">
                  <WhiteHeart />
                  <Typography
                    variant="p"
                    className="font-poppins"
                    text="Like"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
