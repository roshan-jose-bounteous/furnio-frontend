// "use client";
// import React, { useState } from "react";
// import { productDetails } from "@/data/productDetails";
// import ProductCard from "@/components/common/ProductCard";
// import Typography from "@/components/common/Typography";
// import Button from "@/components/common/Button";

// const RelatedProducts = () => {
//   // State to track the number of displayed products
//   const [visibleProducts, setVisibleProducts] = useState(4);

//   // Function to show more products
//   const showMoreProducts = () => {
//     setVisibleProducts(productDetails.length);
//   };

//   // Function to show less products (reset to 4)
//   const showLessProducts = () => {
//     setVisibleProducts(4);
//   };

//   return (
//     <div className="flex flex-col justify-center px-10 md:px-36 py-8 gap-8">
//       <Typography
//         variant="h3"
//         text="Related Products"
//         className="font-poppins font-medium text-4xl flex justify-center"
//       />

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Show only the products based on the visibleProducts state */}
//         {productDetails.slice(0, visibleProducts).map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>

//       {/* Show More/Show Less Buttons */}
//       <div className="flex justify-center mt-6">
//         {visibleProducts < productDetails.length ? (
//           <Button
//             variant="Related"
//             text="Show More"
//             onClick={showMoreProducts}
//             className=""
//           />
//         ) : (
//           <Button
//             variant="Related"
//             text="Show Less"
//             onClick={showLessProducts}
//             className=""
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;

"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/common/ProductCard";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";
import { Product, getProducts } from "@/middleware/api"; // Import Product type and API function

const RelatedProducts = () => {
  // State to track the number of displayed products
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [products, setProducts] = useState<Product[]>([]); // State to store products from API
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Set loading to true while fetching data
        const fetchedProducts = await getProducts(); // Call the API function to get products
        setProducts(fetchedProducts); // Set the products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProducts();
  }, []);

  // Function to show more products
  const showMoreProducts = () => {
    setVisibleProducts(products.length);
  };

  // Function to show less products (reset to 4)
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
          {/* Show only the products based on the visibleProducts state */}
          {products.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}

      {/* Show More/Show Less Buttons */}
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
