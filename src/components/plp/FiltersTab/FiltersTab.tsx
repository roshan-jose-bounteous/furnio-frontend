// "use client";
// import React, { useState } from "react";
// import Filter from "@/public/assets/icons/Filter";
// import Typography from "@/components/common/Typography";
// import GridFilter from "@/public/assets/icons/GridFilter";
// import ListFilter from "@/public/assets/icons/ListFilter";
// import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";
// import ProductList from "@/components/plp/ProductList/ProductList";
// import { Product } from "@/types/types";
// import Pagination from "../Pagination/Pagination";
// import { productDetails } from "@/data/productDetails";
// import Button from "@/components/common/Button";

// const FiltersTab = () => {
//   const [isGridView, setIsGridView] = useState(true);
//   const [showCount, setShowCount] = useState(16);
//   const [sortBy, setSortBy] = useState("default");
//   const [currentPage, setCurrentPage] = useState(1); // New state for current page

//   // Update handleSort to use the Product type
//   const handleSort = (products: Product[]) => {
//     if (sortBy === "ascending") {
//       return [...products].sort((a, b) => a.price - b.price);
//     } else if (sortBy === "descending") {
//       return [...products].sort((a, b) => b.price - a.price);
//     }
//     return products; // default
//   };

//   const totalProducts = handleSort(productDetails).length; // Total number of products
//   const totalPages = Math.ceil(totalProducts / showCount); // Total number of pages

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       {/* Filter and View Options */}
//       <div className="bg-[#F9F1E7] flex flex-col md:flex-row justify-center md:justify-between items-center px-10 md:px-36 py-5 w-full gap-4 md:gap-0">
//         <div className="flex flex-row items-center justify-between gap-7">
//           <div className="flex flex-row items-center justify-between gap-3">
//             <Filter />
//             <Typography
//               variant="p"
//               className="font-poppins text-xl"
//               text="Filter"
//             />
//           </div>
//           {/* Toggle between Grid and List view */}
//           <Button
//             variant="Default"
//             onClick={() => setIsGridView(true)}
//             className={`p-1 ${isGridView ? "bg-[#e3c530] rounded" : ""}`}
//           >
//             <GridFilter />
//           </Button>
//           <Button
//             variant="Default"
//             onClick={() => setIsGridView(false)}
//             className={`p-1 ${isGridView ? "" : "bg-[#e3c530] rounded"}`}
//           >
//             <ListFilter />
//           </Button>
//           <VerticalDividerLine />
//           <Typography
//             variant="p"
//             className="font-poppins font-normal text-xs md:text-lg"
//             text={`Showing ${showCount} results`}
//           />
//         </div>

//         {/* Show Dropdown */}
//         <div className="flex flex-row items-center justify-between gap-7">
//           <div className="flex flex-row items-center justify-between gap-3">
//             <Typography
//               variant="p"
//               className="font-poppins text-sm md:text-xl"
//               text="Show"
//             />
//             <select
//               className="bg-white p-1 md:p-3 text-xs md:text-md font-poppins"
//               value={showCount}
//               onChange={(e) => {
//                 setShowCount(Number(e.target.value));
//                 setCurrentPage(1); // Reset to first page when showCount changes
//               }}
//             >
//               <option value={16}>16</option>
//               <option value={8}>8</option>
//               <option value={32}>32</option>
//             </select>
//           </div>

//           {/* Sort By Dropdown */}
//           <div className="flex flex-row items-center justify-between gap-3">
//             <Typography
//               variant="p"
//               className="font-poppins text-sm md:text-xl"
//               text="Sort by"
//             />
//             <select
//               className="bg-white p-1 md:p-3 text-xs md:text-md font-poppins"
//               value={sortBy}
//               onChange={(e) => {
//                 setSortBy(e.target.value);
//                 setCurrentPage(1); // Reset to first page when sorting changes
//               }}
//             >
//               <option value="default">Default</option>
//               <option value="ascending">Price: Low to High</option>
//               <option value="descending">Price: High to Low</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Product List */}
//       <ProductList
//         isGridView={isGridView}
//         showCount={showCount}
//         handleSort={handleSort}
//         currentPage={currentPage} // Pass current page
//       />

//       {/* Pagination Component */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default FiltersTab;

"use client";
import React, { useState } from "react";
import Filter from "@/public/assets/icons/Filter";
import Typography from "@/components/common/Typography";
import GridFilter from "@/public/assets/icons/GridFilter";
import ListFilter from "@/public/assets/icons/ListFilter";
import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";
import ProductList from "@/components/plp/ProductList/ProductList";
import { Product } from "@/types/types";
import Pagination from "../Pagination/Pagination";
import { productDetails } from "@/data/productDetails";
import Button from "@/components/common/Button";

const FiltersTab = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [showCount, setShowCount] = useState(16);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [isFilterVisible, setIsFilterVisible] = useState(false); // State to toggle filter visibility

  // Update handleSort to use the Product type and filter by name
  const handleSort = (products: Product[]) => {
    let sortedProducts = products;

    if (searchTerm) {
      sortedProducts = sortedProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === "ascending") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "descending") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };

  const totalProducts = handleSort(productDetails).length;
  const totalPages = Math.ceil(totalProducts / showCount);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Filter and View Options */}
      <div className="bg-[#F9F1E7] flex flex-col md:flex-row justify-center md:justify-between items-center px-10 md:px-36 py-5 w-full gap-4 md:gap-0">
        <div className="flex flex-row items-center justify-between gap-7">
          <div className="flex flex-row items-center justify-between gap-3">
            <Button
              variant="Default"
              onClick={() => setIsFilterVisible(!isFilterVisible)}
              className={`flex flex-row items-center gap-3 p-1 ${
                isFilterVisible ? "bg-[#e3b030] rounded shadow" : ""
              }`}
            >
              <Filter />

              <Typography
                variant="p"
                className="font-poppins text-xl"
                text="Filter"
              />
            </Button>
          </div>

          {/* Toggle between Grid and List view */}
          <Button
            variant="Default"
            onClick={() => setIsGridView(true)}
            className={`p-1 ${isGridView ? "bg-[#e3b030] rounded" : ""}`}
          >
            <GridFilter />
          </Button>
          <Button
            variant="Default"
            onClick={() => setIsGridView(false)}
            className={`p-1 ${isGridView ? "" : "bg-[#e3b030] rounded"}`}
          >
            <ListFilter />
          </Button>
          <VerticalDividerLine />
          <Typography
            variant="p"
            className="font-poppins font-normal text-xs md:text-lg"
            text={`Showing ${showCount} results`}
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
              onChange={(e) => {
                setShowCount(Number(e.target.value));
                setCurrentPage(1);
              }}
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
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="default">Default</option>
              <option value="ascending">Price: Low to High</option>
              <option value="descending">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Bar when Filter is visible */}
      {isFilterVisible && (
        <div className="flex flex-col items-center py-5">
          <Typography
            variant="p"
            className="font-poppins text-sm md:text-xl"
            text="Search by Name"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded mt-2 font-poppins"
            placeholder="Search products by name"
          />
        </div>
      )}

      {/* Product List */}
      <ProductList
        isGridView={isGridView}
        showCount={showCount}
        handleSort={handleSort}
        currentPage={currentPage}
      />

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default FiltersTab;
