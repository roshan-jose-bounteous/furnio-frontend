"use client";
import React from "react";
import ProductCard from "@/components/common/ProductCard";
import ListProductCard from "@/components/common/ListProductCard";
import { ProductListProps } from "@/types/types";
import Link from "next/link";

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
        {products.map((product, index) => (
          <Link href={`/pdp?id=${product.id}`}>
            {isGridView ? (
              <ProductCard key={index} product={product} />
            ) : (
              <ListProductCard key={index} product={product} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
