"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageSectionProps {
  descriptionImages: { alt: string; imageURL: string }[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ descriptionImages }) => {
  const [selectedImage, setSelectedImage] = useState(
    descriptionImages[0].imageURL
  );

  console.log("Description: ", descriptionImages);
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-5 md:gap-8 w-full md:w-1/2 ">
      <div className="flex flex-row md:flex-col gap-3 md:gap-4">
        {descriptionImages.map((img, index) => (
          <Image
            key={index}
            src={img.imageURL}
            width={80}
            height={64}
            alt={img.alt}
            className={`w-20 h-16 bg-[#F5EDE3] rounded-md object-contain cursor-pointer border-2 ${
              selectedImage === img.imageURL
                ? "border-black"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(img.imageURL)}
          />
        ))}
      </div>

      <div className="flex items-center justify-center bg-[#F5EDE3] rounded-md h-64 md:h-96 w-full max-w-lg">
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
