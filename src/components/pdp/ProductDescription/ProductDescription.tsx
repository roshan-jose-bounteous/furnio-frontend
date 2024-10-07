"use client";
import Typography from "@/components/common/Typography";
import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-poppins text-[#9F9F9F] ">
            <Typography
              variant="p"
              text="Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road."
            />
            <Typography
              variant="p"
              text="Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel."
            />
          </div>
        );
      case "Additional Information":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-poppins text-[#9F9F9F] ">
            <Typography
              variant="p"
              text="Additional information about the product. Includes materials,
              sizes, colors, and other specific data."
            />
          </div>
        );
      case "Reviews":
        return (
          <div className="flex flex-col gap-4 py-6 justify-center items-center w-[70%] mx-auto font-poppins text-[#9F9F9F] ">
            <Typography
              variant="p"
              text="Here you can read reviews from customers who purchased this
              product. Rated 4.5 stars on average."
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
