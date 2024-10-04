import Navbar from "@/components/Navbar";
import ListSection from "@/components/plp/ListSection";
import FiltersTab from "@/components/plp/FiltersTab";
import HeroSection from "@/components/plp/HeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FiltersTab />
      <ListSection />
    </>
  );
};

export default page;
