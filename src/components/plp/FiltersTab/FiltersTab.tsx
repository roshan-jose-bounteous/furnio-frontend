"use client";
import React, { useState } from "react";
import Filter from "@/public/assets/icons/Filter";
import Typography from "@/components/common/Typography";
import GridFilter from "@/public/assets/icons/GridFilter";
import ListFilter from "@/public/assets/icons/ListFilter";
import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";
import ProductList from "@/components/plp/ProductList/ProductList";
import { Product } from "@/types/types";

const FiltersTab = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [showCount, setShowCount] = useState(16);
  const [sortBy, setSortBy] = useState("default");

  // Update handleSort to use the Product type
  const handleSort = (products: Product[]) => {
    if (sortBy === "ascending") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === "descending") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products; // default
  };

  return (
    <div>
      {/* Filter and View Options */}
      <div className="bg-[#F9F1E7] flex flex-col md:flex-row justify-center md:justify-between items-center px-10 md:px-36 py-5 w-full gap-4 md:gap-0">
        <div className="flex flex-row items-center justify-between gap-7">
          <div className="flex flex-row items-center justify-between gap-3">
            <Filter />
            <Typography
              variant="p"
              className="font-poppins text-xl"
              text="Filter"
            />
          </div>
          {/* Toggle between Grid and List view */}
          <button onClick={() => setIsGridView(true)}>
            <GridFilter />
          </button>
          <button onClick={() => setIsGridView(false)}>
            <ListFilter />
          </button>
          <VerticalDividerLine />
          <Typography
            variant="p"
            className="font-poppins font-normal text-xs md:text-lg"
            text={`Showing 1-${showCount} of 32 results`}
          />
        </div>

        {/* Show Dropdown */}
        <div className="flex flex-row items-center justify-between gap-7">
          <div className="flex flex-row items-center justify-between gap-3">
            <Typography
              variant="p"
              className="font-poppins text-sm md:text-xl"
              text="Show"
            />
            <select
              className="bg-white p-1 md:p-3 text-xs md:text-md font-poppins"
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
            >
              <option value={16}>16</option>
              <option value={8}>8</option>
              <option value={32}>32</option>
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex flex-row items-center justify-between gap-3">
            <Typography
              variant="p"
              className="font-poppins text-sm md:text-xl"
              text="Sort by"
            />
            <select
              className="bg-white p-1 md:p-3 text-xs md:text-md font-poppins"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="ascending">Price: Low to High</option>
              <option value="descending">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product List */}
      <ProductList
        isGridView={isGridView}
        showCount={showCount}
        handleSort={handleSort}
      />
    </div>
  );
};

export default FiltersTab;
