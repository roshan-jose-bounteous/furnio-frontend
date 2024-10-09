// import AdditionalImages from "@/components/pdp/AdditionalImages/AdditionalImages";
// import Breadcrumb from "@/components/pdp/Breadcrumb/Breadcrumb";
// import Description from "@/components/pdp/Description/Description";
// import ProductDescription from "@/components/pdp/ProductDescription/ProductDescription";
// import RelatedProducts from "@/components/pdp/RelatedProducts/RelatedProducts";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <Breadcrumb />
//       <Description />
//       <div className="border-1 border-b border-[#D9D9D9]" />
//       <ProductDescription />
//       <AdditionalImages />
//       <div className="border-1 border-b border-[#D9D9D9]" />

//       <RelatedProducts />
//     </div>
//   );
// };

// export default page;

// pdp/[id]/page.tsx
// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { getProductById, Product } from "@/middleware/api"; // Adjust the import path as necessary
// import AdditionalImages from "@/components/pdp/AdditionalImages/AdditionalImages";
// import Breadcrumb from "@/components/pdp/Breadcrumb/Breadcrumb";
// import Description from "@/components/pdp/Description/Description";
// import ProductDescription from "@/components/pdp/ProductDescription/ProductDescription";
// import RelatedProducts from "@/components/pdp/RelatedProducts/RelatedProducts";

// const Page = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get the product ID from the router query
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         const fetchedProduct = await getProductById(Number(id)); // Convert id to number
//         console.log("Fetched Product:", fetchedProduct); // Console log the response
//         setProduct(fetchedProduct);
//       };

//       fetchProduct();
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>; // Handle loading state
//   }

//   return (
//     <div>
//       <Breadcrumb />
//       <Description />
//       <div className="border-1 border-b border-[#D9D9D9]" />
//       <ProductDescription />
//       <AdditionalImages />
//       <div className="border-1 border-b border-[#D9D9D9]" />
//       <RelatedProducts />
//     </div>
//   );
// };

// export default Page;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { getProductById, Product } from "@/middleware/api"; // Adjust the import path as necessary
// import AdditionalImages from "@/components/pdp/AdditionalImages/AdditionalImages";
// import Breadcrumb from "@/components/pdp/Breadcrumb/Breadcrumb";
// import Description from "@/components/pdp/Description/Description";
// import ProductDescription from "@/components/pdp/ProductDescription/ProductDescription";
// import RelatedProducts from "@/components/pdp/RelatedProducts/RelatedProducts";

// const Page = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get the product ID from the router query
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         const fetchedProduct = await getProductById(Number(id)); // Convert id to number
//         console.log("Fetched Product:", fetchedProduct); // Console log the response
//         setProduct(fetchedProduct);
//       };

//       fetchProduct();
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>; // Handle loading state
//   }

//   return (
//     <div>
//       <Breadcrumb />
//       <Description /> {/* Pass product data to Description */}
//       <div className="border-1 border-b border-[#D9D9D9]" />
//       <ProductDescription /> {/* Pass product data to ProductDescription */}
//       <AdditionalImages />
//       <div className="border-1 border-b border-[#D9D9D9]" />
//       <RelatedProducts />
//     </div>
//   );
// };

// export default Page;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { getProductById, Product } from "@/middleware/api"; // Adjust the import path as necessary
// import AdditionalImages from "@/components/pdp/AdditionalImages/AdditionalImages";
// import Breadcrumb from "@/components/pdp/Breadcrumb/Breadcrumb";
// import Description from "@/components/pdp/Description/Description";
// import ProductDescription from "@/components/pdp/ProductDescription/ProductDescription";
// import RelatedProducts from "@/components/pdp/RelatedProducts/RelatedProducts";

// const Page = () => {
//   const router = useRouter();
//   console.log("route: ", router);
//   const { query } = router; // Get the query object from the router
//   const { id } = query; // Destructure id from query
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const fetchProduct = async () => {
//       if (id) {
//         const fetchedProduct = await getProductById(Number(id)); // Convert id to number
//         console.log("Fetched Product:", fetchedProduct); // Console log the response
//         setProduct(fetchedProduct);
//         setLoading(false); // Update loading state
//       }
//     };

//     fetchProduct();
//   }, [id]); // Run effect when id changes

//   if (loading) {
//     return <div>Loading...</div>; // Show loading state
//   }

//   if (!product) {
//     return <div>Product not found.</div>; // Handle product not found
//   }

//   return (
//     <div>
//       <Breadcrumb />
//       <Description /> {/* Pass product data to Description */}
//       <div className="border-1 border-b border-[#D9D9D9]" />
//       <ProductDescription /> {/* Pass product data to ProductDescription */}
//       <AdditionalImages />
//       <div className="border-1 border-b border-[#D9D9D9]" />
//       <RelatedProducts />
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProductById } from "@/middleware/api"; // Adjust the import path as necessary
import { Product } from "@/types/types";
import AdditionalImages from "@/components/pdp/AdditionalImages/AdditionalImages";
import Breadcrumb from "@/components/pdp/Breadcrumb/Breadcrumb";
import Description from "@/components/pdp/Description/Description";
import ProductDescription from "@/components/pdp/ProductDescription/ProductDescription";
import RelatedProducts from "@/components/pdp/RelatedProducts/RelatedProducts";

const Page = () => {
  const searchParams = useSearchParams();
  console.log("params: ", searchParams);
  const id = searchParams.get("id");
  console.log("ID: ", id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const fetchedProduct = await getProductById(Number(id)); // Convert id to number
        console.log("Fetched Product:", fetchedProduct); // Console log the response
        setProduct(fetchedProduct);
        console.log("selected: ", product);
        setLoading(false); // Update loading state
      }
    };

    fetchProduct();
  }, [id]); // Run effect when id changes

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (!product) {
    return <div>Product not found.</div>; // Handle product not found
  }

  return (
    <div>
      <Breadcrumb />
      <Description product={product} /> {/* Pass product data to Description */}
      <div className="border-1 border-b border-[#D9D9D9]" />
      <ProductDescription
        description={product.description}
        additionalInformation={product.additionalInformation}
      />
      <AdditionalImages />
      <div className="border-1 border-b border-[#D9D9D9]" />
      <RelatedProducts />
    </div>
  );
};

export default Page;
