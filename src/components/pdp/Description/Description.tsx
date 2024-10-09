import React from "react";
import ImageSection from "../ImageSection/ImageSection";
import ProductDetails from "../ProductDetails/ProductDetails";

const Description = () => {
  return (
    <div className="px-4 md:px-40 flex flex-col md:flex-row py-10 justify-start gap-10">
      <ImageSection />
      <ProductDetails />
    </div>
  );
};

export default Description;

// // // Description.tsx
// // import React from "react";
// // import ImageSection from "../ImageSection/ImageSection";
// // import ProductDetails from "../ProductDetails/ProductDetails";
// // import { Product } from "@/types/types";

// // const Description = (product: Product) => {
// //   return (
// //     <div className="px-4 md:px-40 flex flex-col md:flex-row py-10 justify-start gap-10">
// //       <ImageSection imageURL={product.imageURL} />
// //       <ProductDetails product={product} />
// //     </div>
// //   );
// // };

// // export default Description;

// // Description.tsx
// import React from "react";
// import ImageSection from "../ImageSection/ImageSection";
// import ProductDetails from "../ProductDetails/ProductDetails";
// import { Product } from "@/types/types";

// // Destructure the product prop
// const Description = ({
//   productName,
//   description,
//   price,
//   imageURL,
// }: Product) => {
//   return (
//     <div className="px-4 md:px-40 flex flex-col md:flex-row py-10 justify-start gap-10">
//       <ImageSection imageURL={imageURL} />
//       {/* Pass individual fields instead of product object */}
//       <ProductDetails
//         productName={productName}
//         description={description}
//         price={price}
//       />
//     </div>
//   );
// };

// export default Description;
