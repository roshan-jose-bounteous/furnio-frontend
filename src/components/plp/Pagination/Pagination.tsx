// import Button from "@/components/common/Button";
// import React from "react";

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({
//   currentPage,
//   totalPages,
//   onPageChange,
// }) => {
//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };

//   return (
//     <div className="flex flex-row justify-center items-center gap-6 py-12">
//       <Button
//         variant="Pagination"
//         text="Previous"
//         onClick={handlePrevious}
//         disabled={currentPage === 1} // Disable if on the first page
//       />
//       {Array.from({ length: totalPages }, (_, index) => (
//         <Button
//           key={index + 1}
//           variant="Pagination"
//           text={`${index + 1}`}
//           onClick={() => onPageChange(index + 1)}
//           disabled={currentPage === index + 1} // Disable current page
//         />
//       ))}
//       <Button
//         variant="Pagination"
//         text="Next"
//         onClick={handleNext}
//         disabled={currentPage === totalPages} // Disable if on the last page
//       />
//     </div>
//   );
// };

// export default Pagination;

import Button from "@/components/common/Button";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

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
        disabled={currentPage === 1} // Disable if on the first page
      />
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1; // Page number starts from 1
        return (
          <Button
            key={page}
            variant="Pagination"
            text={`${page}`}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page} // Disable current page
            className={`${
              currentPage === page
                ? "bg-[#c9832d] text-white" // Highlight class for the selected page
                : "" // Normal class for other pages
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
