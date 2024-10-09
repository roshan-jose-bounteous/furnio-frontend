import Button from "@/components/common/Button";
import React from "react";
import { PaginationProps } from "@/types/types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-6 py-12">
      <Button
        variant="Pagination"
        text="Previous"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      />
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <Button
            key={page}
            variant="Pagination"
            text={`${page}`}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
            className={`${
              currentPage === page ? "bg-[#c9832d] text-white" : ""
            }`}
          />
        );
      })}
      <Button
        variant="Pagination"
        text="Next"
        onClick={handleNext}
        disabled={currentPage === totalPages} // Disable if on the last page
      />
    </div>
  );
};

export default Pagination;
