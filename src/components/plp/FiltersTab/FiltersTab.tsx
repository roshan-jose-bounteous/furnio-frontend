import Filter from "@/public/assets/icons/Filter";
import React from "react";
import Typography from "@/components/common/Typography";
import GridFilter from "@/public/assets/icons/GridFilter";
import ListFilter from "@/public/assets/icons/ListFilter";
import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";
import Button from "@/components/common/Button";

const FiltersTab = () => {
  return (
    <div className="bg-[#F9F1E7] flex flex-row justify-between items-center px-36 py-5">
      <div className="flex flex-row items-center justify-between gap-7">
        <div className="flex flex-row items-center justify-between gap-3">
          <Filter />
          <Typography
            variant="p"
            className="font-poppins text-xl"
            text="Filter"
          />
        </div>
        <GridFilter />
        <ListFilter />
        <VerticalDividerLine />
        <Typography
          variant="p"
          className="font-poppins font-normal"
          text="Showing 1-16 of 32 results"
        />
      </div>
      <div className="flex flex-row items-center justify-between gap-7">
        <div className="flex flex-row items-center justify-between gap-3">
          <Typography
            variant="p"
            className="font-poppins text-xl"
            text="Show"
          />
          <Button variant="SortBy" className="bg-white p-3" text="16" />
        </div>
        <div className="flex flex-row items-center justify-between gap-3">
          <Typography
            variant="p"
            className="font-poppins text-xl"
            text="Sort by"
          />
          <Button variant="SortBy" className="pr-12" text="Default" />
        </div>
      </div>
    </div>
  );
};

export default FiltersTab;
