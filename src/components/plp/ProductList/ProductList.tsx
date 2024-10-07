import React from "react";
import { productDetails } from "@/data/productDetails";
import ProductCard from "@/components/common/ProductCard";
import Pagination from "../Pagination/Pagination";

const ProductList = () => {
  return (
    <div className="flex flex-col justify-center px-36 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {productDetails.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductList;
