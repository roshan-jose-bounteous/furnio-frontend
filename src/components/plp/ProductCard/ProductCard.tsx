// // src/components/ProductCard.tsx
// import React from "react";
// import ProductImage from "@/components/plp/ProductImage/ProductImage";
// import ProductDiscount from "@/components/plp/ProductDiscount/ProductDiscount";
// import ProductDetails from "@/components/plp/ProductDetails/ProductDetails";

// type ProductCardProps = {
//   product: {
//     id: number;
//     productName: string;
//     description: string;
//     price: number;
//     originalPrice?: number | null;
//     discount?: string | null;
//     imageUrl: string;
//   };
// };

// const ProductCard = ({ product }: ProductCardProps) => {
//   return (
//     <div>
//       <div className="relative">
//         <ProductImage
//           imageUrl={product.imageUrl}
//           productName={product.productName}
//         />
//         {product.discount && <ProductDiscount discount={product.discount} />}
//       </div>
//       <ProductDetails
//         productName={product.productName}
//         description={product.description}
//         price={product.price}
//         originalPrice={product.originalPrice}
//       />
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import ProductImage from "@/components/plp/ProductImage/ProductImage";
import ProductDiscount from "@/components/plp/ProductDiscount/ProductDiscount";
import ProductDetails from "@/components/plp/ProductDetails/ProductDetails";
import Button from "@/components/common/Button";
import Share from "@/public/assets/icons/Share";
import Compare from "@/public/assets/icons/Compare";
import WhiteHeart from "@/public/assets/icons/WhiteHeart";
import Typography from "@/components/common/Typography";

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
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="relative group">
      {/* Image and Discount */}
      <div className="relative overflow-hidden">
        <ProductImage
          imageUrl={product.imageUrl}
          productName={product.productName}
        />
        {product.discount && <ProductDiscount discount={product.discount} />}
        {/* Product Details */}
        <ProductDetails
          productName={product.productName}
          description={product.description}
          price={product.price}
          originalPrice={product.originalPrice}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-5">
          <Button variant="AddToCart" text="Add to cart" />

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
