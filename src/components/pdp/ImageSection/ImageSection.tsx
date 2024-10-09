"use client";
import React, { useState } from "react";
import Image from "next/image";

// List of images from public directory
const images = [
  "/assets/images/sofa1.png",
  "/assets/images/sofa2.png",
  "/assets/images/sofa3.png",
  "/assets/images/sofa4.png",
];

const ImageSection = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-start  gap-8 w-full md:w-1/2">
      <div className="flex flex-row md:flex-col gap-4">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={80}
            height={64}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-16 bg-[#F5EDE3] rounded-md object-contain cursor-pointer border-2 ${
              selectedImage === img ? "border-black" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Main image */}

      <div className="flex items-center justify-center bg-[#F5EDE3] rounded-md h-64 md:h-96 w-full max-w-lg ">
        <Image
          src={selectedImage}
          width={0}
          height={0}
          sizes="100vw"
          alt="Main Product"
          className="w-full h-full object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageSection;

// // ImageSection.tsx
// import React, { useState } from "react";
// import Image from "next/image";

// const ImageSection = ({ imageURL }: { imageURL: string }) => {
//   const [selectedImage, setSelectedImage] = useState(imageURL);

//   return (
//     <div className="flex flex-col-reverse md:flex-row justify-center items-start  gap-8 w-full md:w-1/2">
//       {/* Thumbnail list */}
//       <div className="flex flex-row md:flex-col gap-4">
//         <Image
//           src={selectedImage}
//           width={80}
//           height={64}
//           alt={`Thumbnail`}
//           className="w-20 h-16 bg-[#F5EDE3] rounded-md object-contain cursor-pointer border-2 border-black"
//           onClick={() => setSelectedImage(imageURL)}
//         />
//       </div>

//       {/* Main image */}
//       <div className="flex items-center justify-center bg-[#F5EDE3] rounded-md h-64 md:h-96 w-full max-w-lg ">
//         <Image
//           src={selectedImage}
//           width={0}
//           height={0}
//           sizes="100vw"
//           alt="Main Product"
//           className="w-full h-full object-contain rounded-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageSection;
