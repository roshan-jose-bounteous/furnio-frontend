"use client";
import React, { useState } from "react";

type ImageSectionProps = {};

// List of images from public directory
const images = [
  "/assets/images/sofa1.png",
  "/assets/images/sofa2.png",
  "/assets/images/sofa3.png",
  "/assets/images/sofa4.png",
];

const ImageSection = (props: ImageSectionProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex justify-center items-start gap-8 w-1/2">
      {/* Sidebar with smaller images */}
      <div className="flex flex-col space-y-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-16 bg-[#F5EDE3] rounded-md object-contain cursor-pointer border-2 ${
              selectedImage === img ? "border-black" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Main image */}
      <div className="flex items-center justify-center bg-[#F5EDE3] rounded-md h-96 w-full max-w-lg">
        <img
          src={selectedImage}
          alt="Main Product"
          className="w-full h-full object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageSection;
