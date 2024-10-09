"use client";
import Typography from "@/components/common/Typography";
import React, { useState } from "react";
import { ProductDescriptionProps } from "@/types/types";

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
  additionalInformation,
}) => {
  const [activeTab, setActiveTab] = useState("Description");

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-poppins text-[#9F9F9F] ">
            <Typography variant="p" text={description} />
          </div>
        );
      case "Additional Information":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-poppins text-[#9F9F9F] ">
            <Typography variant="p" text={additionalInformation} />
          </div>
        );
      case "Reviews":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-poppins text-[#9F9F9F] ">
            <Typography
              variant="p"
              text="Here you can read reviews from customers who purchased this product. Rated 4.5 stars on average."
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-10">
      {/* Tabs */}
      <div className="flex flex-row justify-center gap-3 md:gap-10 font-poppins">
        <button
          className={`${
            activeTab === "Description"
              ? "text-black font-medium border-b-2 border-black"
              : "text-[#9F9F9F] font-light"
          } text-base md:text-2xl font-semibold`}
          onClick={() => setActiveTab("Description")}
        >
          Description
        </button>

        <button
          className={`${
            activeTab === "Additional Information"
              ? "text-black font-medium border-b-2 border-black"
              : "text-[#9F9F9F] font-light"
          } text-base md:text-2xl  font-semibold`}
          onClick={() => setActiveTab("Additional Information")}
        >
          Additional Information
        </button>

        <button
          className={`${
            activeTab === "Reviews"
              ? "text-black font-medium border-b-2 border-black"
              : "text-[#9F9F9F] font-light"
          } text-base md:text-2xl font-semibold`}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Content */}
      <div className="my-4">{renderContent()}</div>
    </div>
  );
};

export default ProductDescription;
