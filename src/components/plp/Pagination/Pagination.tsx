import Button from "@/components/common/Button";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-6 py-12">
      <Button variant="Pagination" text="1" />
      <Button variant="Pagination" text="2" />
      <Button variant="Pagination" text="3" />
      <Button variant="Pagination" text="Next" />
    </div>
  );
};

export default Pagination;
