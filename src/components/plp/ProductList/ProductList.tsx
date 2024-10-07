import React from "react";
import { productDetails } from "@/data/productDetails";
import ProductCard from "@/components/common/ProductCard";
import Pagination from "../Pagination/Pagination";

type Product = {
  id: number;
  productName: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  discount?: string | null;
  imageUrl: string;
};

type ProductListProps = {
  isGridView: boolean;
  showCount: number;
  handleSort: (products: Product[]) => Product[];
};

const ProductList = ({
  isGridView,
  showCount,
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
