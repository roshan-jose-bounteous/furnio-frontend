"use client";
import React, { useState, useEffect } from "react";
import Filter from "@/public/assets/icons/Filter";
import Typography from "@/components/common/Typography";
import GridFilter from "@/public/assets/icons/GridFilter";
import ListFilter from "@/public/assets/icons/ListFilter";
import VerticalDividerLine from "@/public/assets/icons/VerticalDividerLine";
import ProductList from "@/components/plp/ProductList/ProductList";
import Pagination from "../Pagination/Pagination";
import Button from "@/components/common/Button";
import { getProducts } from "@/middleware/api"; //
import { Product } from "@/types/types";

const FiltersTab: React.FC = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [showCount, setShowCount] = useState(16);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        console.log("Fetched: ", fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSort = (products: Product[]) => {
    let sortedProducts = [...products];

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

  const sortedProducts = handleSort(products);
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / showCount);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * showCount,
    currentPage * showCount
  );

  return (
    <div>
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

      {loading ? (
        <div className="flex justify-center items-center py-5">
          <Typography variant="p" text="Loading products..." />
        </div>
      ) : (
        <ProductList
          isGridView={isGridView}
          products={paginatedProducts} // Pass paginated products to ProductList
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default FiltersTab;
