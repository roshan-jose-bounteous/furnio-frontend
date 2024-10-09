// import React from "react";
// import ProductImage from "@/components/plp/ProductImage/ProductImage";
// import ProductDiscount from "@/components/plp/ProductDiscount/ProductDiscount";
// import ProductDetails from "@/components/plp/ProductDetails/ProductDetails";
// import Button from "@/components/common/Button";
// import Share from "@/public/assets/icons/Share";
// import Compare from "@/public/assets/icons/Compare";
// import WhiteHeart from "@/public/assets/icons/WhiteHeart";
// import Typography from "@/components/common/Typography";
// import Link from "next/link";

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
//   isGridView: boolean; // Add this prop to toggle between grid and list view
// };

// const ProductCard = ({ product, isGridView }: ProductCardProps) => {
//   return (
//     <Link href="/pdp">
//       <div className={`relative group ${!isGridView ? "flex gap-6" : ""}`}>
//         {/* If Grid View */}
//         {isGridView ? (
//           <div className="relative overflow-hidden">
//             {/* Image and Discount */}
//             <ProductImage
//               imageUrl={product.imageUrl}
//               productName={product.productName}
//               width={1440}
//               height={328}
//               className="w-full h-80 object-cover"
//             />
//             {product.discount && (
//               <ProductDiscount discount={product.discount} />
//             )}
//             {/* Product Details */}
//             <ProductDetails
//               productName={product.productName}
//               description={product.description}
//               price={product.price}
//               originalPrice={product.originalPrice}
//             />
//             {/* Hover effects only in grid view */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-5">
//               <Button
//                 variant="AddToCart"
//                 text="Add to cart"
//                 className="text-[#B88E2F] bg-white"
//               />
//               <div className="flex justify-between gap-5 text-white">
//                 <button className="flex items-center space-x-1 hover:text-gray-400">
//                   <Share />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Share"
//                   />
//                 </button>
//                 <button className="flex items-center space-x-1 hover:text-gray-400">
//                   <Compare />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Compare"
//                   />
//                 </button>
//                 <button className="flex items-center space-x-1 hover:text-gray-400">
//                   <WhiteHeart />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Like"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           // List View Layout
//           <div className="flex flex-row items-start justify-start gap-16 w-3/5 h-1/3 bg-[#F4F5F7] ">
//             {/* Image on the left */}
//             <div className="">
//               <ProductImage
//                 imageUrl={product.imageUrl}
//                 productName={product.productName}
//                 width={1440}
//                 height={328}
//                 className="h-44 w-full object-contain"
//               />
//             </div>

//             {/* Product Details on the right */}
//             <div className="flex flex-row">
//               {/* Display Discount if available */}
//               {/* {product.discount && (
//                 <ProductDiscount discount={product.discount} />
//               )} */}

//               {/* Product Information */}
//               <ProductDetails
//                 productName={product.productName}
//                 description={product.description}
//                 price={product.price}
//               />

//               {/* Always Visible Buttons in List View */}
//               <div className="flex gap-4 bg-[#F4F5F7]">
//                 <Button
//                   variant="AddToCart"
//                   text="Add to cart"
//                   className="bg-[#B88E2F] text-white py-10"
//                 />
//                 {/* <button className="flex items-center space-x-1 text-black hover:text-gray-600">
//                   <Share />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Share"
//                   />
//                 </button>
//                 <button className="flex items-center space-x-1 text-black hover:text-gray-600">
//                   <Compare />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Compare"
//                   />
//                 </button>
//                 <button className="flex items-center space-x-1 text-black hover:text-gray-600">
//                   <WhiteHeart />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Like"
//                   />
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

// import React from "react";
// import ProductImage from "@/components/plp/ProductImage/ProductImage";
// import ProductDiscount from "@/components/plp/ProductDiscount/ProductDiscount";
// import ProductDetails from "@/components/plp/ProductDetails/ProductDetails";
// import Button from "@/components/common/Button";
// import Share from "@/public/assets/icons/Share";
// import Compare from "@/public/assets/icons/Compare";
// import WhiteHeart from "@/public/assets/icons/WhiteHeart";
// import Typography from "@/components/common/Typography";
// import Link from "next/link";

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
//   isGridView: boolean; // Add this prop to toggle between grid and list view
// };

// const ProductCard = ({ product, isGridView }: ProductCardProps) => {
//   return (
//     <Link href="/pdp">
//       <div
//         className={`${
//           !isGridView
//             ? "flex flex-col justify-center items-center border border-black"
//             : "relative group  "
//         }`}
//       >
//         {/* If Grid View */}
//         {isGridView ? (
//           <div className="relative overflow-hidden">
//             {/* Image and Discount */}
//             <ProductImage
//               imageUrl={product.imageUrl}
//               productName={product.productName}
//               width={1440}
//               height={328}
//               className="w-full h-80 object-cover"
//             />
//             {product.discount && (
//               <ProductDiscount discount={product.discount} />
//             )}
//             {/* Product Details */}
//             <ProductDetails
//               productName={product.productName}
//               description={product.description}
//               price={product.price}
//               originalPrice={product.originalPrice}
//             />
//             {/* Hover effects only in grid view */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-5">
//               <Button
//                 variant="AddToCart"
//                 text="Add to cart"
//                 className="text-[#B88E2F] bg-white"
//               />
//               <div className="flex justify-between gap-5 text-white">
//                 <button className="flex items-center space-x-1 hover:text-gray-400">
//                   <Share />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Share"
//                   />
//                 </button>
//                 <button className="flex items-center space-x-1 hover:text-gray-400">
//                   <Compare />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Compare"
//                   />
//                 </button>
//                 <button className="flex items-center space-x-1 hover:text-gray-400">
//                   <WhiteHeart />
//                   <Typography
//                     variant="p"
//                     className="font-poppins"
//                     text="Like"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           // List View Layout
//           <div className="flex items-center justify-between bg-[#F4F5F7] p-4 rounded-md shadow">
//             {/* Image on the left */}
//             <div className="w-1/5">
//               <ProductImage
//                 imageUrl={product.imageUrl}
//                 productName={product.productName}
//                 width={1440}
//                 height={328}
//                 className="h-44 w-full object-contain"
//               />
//             </div>

//             {/* Product Details on the right */}
//             <div className="flex flex-col justify-between w-4/5 pl-4">
//               {/* Product Information */}
//               <ProductDetails
//                 productName={product.productName}
//                 description={product.description}
//                 price={product.price}
//               />

//               {/* Always Visible Button in List View */}
//               <Button
//                 variant="AddToCart"
//                 text="Add to cart"
//                 className="bg-[#B88E2F] text-white py-2 mt-4"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

// ProductCard.tsx
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
    imageURL: string;
  }; // Add this prop to toggle between grid and list view
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href="/pdp">
      <div className="relative group ">
        <div className="relative overflow-hidden">
          <ProductImage
            imageUrl={product.imageURL}
            productName={product.productName}
            width={1440}
            height={328}
            className="w-full h-80 object-cover"
          />
          {product.discount && <ProductDiscount discount={product.discount} />}
          <ProductDetails
            productName={product.productName}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-5">
            <Button
              variant="AddToCart"
              text="Add to cart"
              className="text-[#B88E2F] bg-white"
            />
            <div className="flex justify-between gap-5 text-white">
              <button className="flex items-center space-x-1 hover:text-gray-400">
                <Share />
                <Typography variant="p" className="font-poppins" text="Share" />
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
                <Typography variant="p" className="font-poppins" text="Like" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

// // ProductCard.tsx
// "use client";
// import React from "react";
// import ProductImage from "@/components/plp/ProductImage/ProductImage";
// import ProductDiscount from "@/components/plp/ProductDiscount/ProductDiscount";
// import ProductDetails from "@/components/plp/ProductDetails/ProductDetails";
// import Button from "@/components/common/Button";
// import Share from "@/public/assets/icons/Share";
// import Compare from "@/public/assets/icons/Compare";
// import WhiteHeart from "@/public/assets/icons/WhiteHeart";
// import Typography from "@/components/common/Typography";
// import Link from "next/link";
// import { useRouter } from "next/router"; // Import useRouter

// type ProductCardProps = {
//   product: {
//     id: number;
//     productName: string;
//     description: string;
//     price: number;
//     originalPrice?: number | null;
//     discount?: string | null;
//     imageURL: string;
//   };
// };

// const ProductCard = ({ product }: ProductCardProps) => {
//   const router = useRouter(); // Initialize the router

//   // Handle navigation to PDP
//   const handleProductClick = () => {
//     router.push({
//       pathname: `/pdp/${product.id}`, // Dynamic route based on product id
//       query: {
//         productName: product.productName,
//         description: product.description,
//         price: product.price,
//         originalPrice: product.originalPrice,
//         discount: product.discount,
//         imageURL: product.imageURL,
//       },
//     });
//   };

//   return (
//     <div className="relative group " onClick={handleProductClick}>
//       <div className="relative overflow-hidden">
//         <ProductImage
//           imageUrl={product.imageURL}
//           productName={product.productName}
//           width={1440}
//           height={328}
//           className="w-full h-80 object-cover"
//         />
//         {product.discount && <ProductDiscount discount={product.discount} />}
//         <ProductDetails
//           productName={product.productName}
//           description={product.description}
//           price={product.price}
//           originalPrice={product.originalPrice}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-5">
//           <Button
//             variant="AddToCart"
//             text="Add to cart"
//             className="text-[#B88E2F] bg-white"
//           />
//           <div className="flex justify-between gap-5 text-white">
//             <button className="flex items-center space-x-1 hover:text-gray-400">
//               <Share />
//               <Typography variant="p" className="font-poppins" text="Share" />
//             </button>
//             <button className="flex items-center space-x-1 hover:text-gray-400">
//               <Compare />
//               <Typography variant="p" className="font-poppins" text="Compare" />
//             </button>
//             <button className="flex items-center space-x-1 hover:text-gray-400">
//               <WhiteHeart />
//               <Typography variant="p" className="font-poppins" text="Like" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
