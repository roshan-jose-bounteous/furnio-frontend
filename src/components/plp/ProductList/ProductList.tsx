// import React from "react";
// import { productDetails } from "@/data/productDetails";
// import ProductCard from "@/components/common/ProductCard";
// import ListProductCard from "@/components/common/ListProductCard"; // Import the new ListProductCard
// import { ProductListProps } from "@/types/types";

// const ProductList = ({
//   isGridView,
//   showCount,
//   handleSort,
//   currentPage, // Accept currentPage as a prop
// }: ProductListProps) => {
//   // Get sorted products
//   const sortedProducts = handleSort(productDetails);

//   // Calculate the starting index for the current page
//   const startIndex = (currentPage - 1) * showCount;
//   // Get the products to display based on the current page
//   const displayedProducts = sortedProducts.slice(
//     startIndex,
//     startIndex + showCount
//   );

//   return (
//     <div className="flex flex-col justify-center px-10 md:px-36 py-8">
//       <div
//         className={`${
//           isGridView
//             ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
//             : "flex flex-col gap-10 md:px-20"
//         }`}
//       >
//         {displayedProducts.map((product, index) =>
//           isGridView ? (
//             <ProductCard key={index} product={product} />
//           ) : (
//             <ListProductCard key={index} product={product} /> // Use ListProductCard for list view
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
"use client";
import React from "react";
import ProductCard from "@/components/common/ProductCard";
// Assuming you have a ListView component
import ListProductCard from "@/components/common/ListProductCard";
import { Product } from "@/middleware/api"; // Import the Product type

interface ProductListProps {
  isGridView: boolean;
  products: Product[]; // Accepting products as a prop
  showCount: number;
}

const ProductList: React.FC<ProductListProps> = ({ isGridView, products }) => {
  return (
    <div className="flex flex-col justify-center px-10 md:px-36 py-8">
      <div
        className={`${
          isGridView
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            : "flex flex-col gap-10 md:px-20"
        }`}
      >
        {products.map((product, index) =>
          isGridView ? (
            <ProductCard key={index} product={product} />
          ) : (
            <ListProductCard key={index} product={product} /> // Use ListProductCard for list view
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
