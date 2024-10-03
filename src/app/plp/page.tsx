import Navbar from "@/components/Navbar";
import FiltersTab from "@/components/plp/FiltersTab";
import HeroSection from "@/components/plp/HeroSection";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FiltersTab />
    </>
  );
};

export default page;
