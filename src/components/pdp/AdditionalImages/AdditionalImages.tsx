import Image from "next/image";
import React from "react";

const AdditionalImages = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-0 py-4 gap-4 w-full justify-center items-center">
      <div className="flex items-center justify-center bg-[#F5EDE3] rounded-md h-96 w-full max-w-xl">
        <Image
          src="/assets/images/sofa6.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="sofa6"
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      <div className="flex items-center justify-center bg-[#F5EDE3] rounded-md h-96 w-full max-w-xl">
        <Image
          src="/assets/images/sofa7.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="sofa6"
          className="w-full h-full object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default AdditionalImages;
