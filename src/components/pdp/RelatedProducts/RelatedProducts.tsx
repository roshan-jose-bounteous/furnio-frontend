"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/common/ProductCard";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";
import { getProducts } from "@/middleware/api"; 
import { Product } from "@/types/types";

const RelatedProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        const fetchedProducts = await getProducts(); 
        setProducts(fetchedProducts); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  const showMoreProducts = () => {
    setVisibleProducts(products.length);
  };

  const showLessProducts = () => {
    setVisibleProducts(4);
  };

  return (
    <div className="flex flex-col justify-center px-10 md:px-36 py-8 gap-8">
      <Typography
        variant="h3"
        text="Related Products"
        className="font-poppins font-medium text-4xl flex justify-center"
      />

      {loading ? (
        <div className="flex justify-center items-center py-5">
          <Typography variant="p" text="Loading products..." />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6">
        {visibleProducts < products.length ? (
          <Button
            variant="Related"
            text="Show More"
            onClick={showMoreProducts}
            className=""
          />
        ) : (
          <Button
            variant="Related"
            text="Show Less"
            onClick={showLessProducts}
            className=""
          />
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
