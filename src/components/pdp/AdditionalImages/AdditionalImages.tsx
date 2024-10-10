"use client";
import React from "react";
import Image from "next/image";

interface AdditionalImagesProps {
  additionalImages: { alt: string; imageURL: string }[];
}

const AdditionalImages: React.FC<AdditionalImagesProps> = ({
  additionalImages,
}) => {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-0 py-4 gap-4 w-full justify-center items-center">
      {additionalImages.map((img, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-[#F5EDE3] rounded-md h-96 w-full max-w-xl"
        >
          <Image
            src={img.imageURL}
            width={0}
            height={0}
            sizes="100vw"
            alt={img.alt}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default AdditionalImages;
