import Filter from "@/public/assets/icons/Filter";
import React from "react";
import Typography from "../common/Typography";
import GridFilter from "@/public/assets/icons/GridFilter";
import ListFilter from "@/public/assets/icons/ListFilter";
import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";
import Button from "../common/Button";

const FiltersTab = () => {
  return (
    <div className="bg-[#F9F1E7] flex flex-row justify-between items-center px-36 py-5">
      <div className="flex flex-row items-center justify-between gap-7">
        <div className="flex flex-row items-center justify-between gap-3">
          <Filter />
          <Typography variant="p" className="font-poppins text-xl">
            Filter
          </Typography>
        </div>
        <GridFilter />
        <ListFilter />
        <VerticalDividerLine />
        <Typography variant="p" className="font-poppins font-normal">
          Showing 1-16 of 32 results
        </Typography>
      </div>
      <div className="flex flex-row items-center justify-between gap-7">
        <div className="flex flex-row items-center justify-between gap-3">
          <Typography variant="p" className="font-poppins text-xl">
            Show
          </Typography>
          <Button variant="SortBy" className="bg-white p-3">
            16
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between gap-3">
          <Typography variant="p" className="font-poppins text-xl">
            Sort by
          </Typography>
          <Button variant="SortBy" className="pr-12">
            Default
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FiltersTab;
