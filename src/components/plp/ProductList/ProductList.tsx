// import React from "react";
// import { productDetails } from "@/data/productDetails";
// import ProductCard from "@/components/common/ProductCard";
// import Pagination from "../Pagination/Pagination";

// type ProductListProps = {
//   isGridView: boolean;
//   showCount: number;
//   sortBy: string;
//   handleSort: (products: any[]) => any[];
// };

// const ProductList = ({
//   isGridView,
//   showCount,
//   sortBy,
//   handleSort,
// }: ProductListProps) => {
//   // Get sorted and limited product list
//   const sortedProducts = handleSort(productDetails).slice(0, showCount);

//   return (
//     <div className="flex flex-col justify-center px-36 py-8">
//       <div
//         className={`${
//           isGridView
//             ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
//             : "flex flex-col gap-5"
//         }`}
//       >
//         {sortedProducts.map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>
//       <Pagination />
//     </div>
//   );
// };

// export default ProductList;

import React from "react";
import { productDetails } from "@/data/productDetails";
import ProductCard from "@/components/common/ProductCard";
import Pagination from "../Pagination/Pagination";

type ProductListProps = {
  isGridView: boolean;
  showCount: number;
  sortBy: string;
  handleSort: (products: any[]) => any[];
};

const ProductList = ({
  isGridView,
  showCount,
  sortBy,
  handleSort,
}: ProductListProps) => {
  // Get sorted and limited product list
  const sortedProducts = handleSort(productDetails).slice(0, showCount);

  return (
    <div className="flex flex-col justify-center px-10 md:px-36 py-8">
      <div
        className={`${
          isGridView
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            : "flex flex-col gap-5"
        }`}
      >
        {sortedProducts.map((product, index) => (
          <ProductCard key={index} product={product} isGridView={isGridView} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductList;
