import React from "react";
import Typography from "../common/Typography";

const productDetails = [
  {
    id: 1,
    productName: "Syltherine",
    description: "Stylish cafe chair",
    price: 25000,
    originalPrice: 35000,
    discount: "30%",
    imageUrl: "/assets/images/Table.png",
  },
  {
    id: 2,
    productName: "Leviosa",
    description: "Stylish cafe chair",
    price: 25000,
    originalPrice: 35000,
    discount: null,
    imageUrl: "/assets/images/Chair.png",
  },
  {
    id: 3,
    productName: "Lolito",
    description: "Luxury big sofa",
    price: 70000,
    originalPrice: 140000,
    discount: "50%",
    imageUrl: "/assets/images/Sofa.png",
  },
  {
    id: 4,
    productName: "Respira",
    description: "Outdoor bar table and stool",
    price: 5000,
    originalPrice: null,
    discount: "New",
    imageUrl: "assets/images/LivingSpace.png",
  },
  {
    id: 5,
    productName: "Syltherine",
    description: "Stylish cafe chair",
    price: 25000,
    originalPrice: 35000,
    discount: "30%",
    imageUrl: "/assets/images/Table.png",
  },
  {
    id: 6,
    productName: "Leviosa",
    description: "Stylish cafe chair",
    price: 25000,
    originalPrice: 35000,
    discount: null,
    imageUrl: "/assets/images/Chair.png",
  },
  {
    id: 7,
    productName: "Lolito",
    description: "Luxury big sofa",
    price: 70000,
    originalPrice: 140000,
    discount: "50%",
    imageUrl: "/assets/images/Sofa.png",
  },
  {
    id: 8,
    productName: "Respira",
    description: "Outdoor bar table and stool",
    price: 5000,
    originalPrice: null,
    discount: "New",
    imageUrl: "assets/images/LivingSpace.png",
  },
  {
    id: 9,
    productName: "Syltherine",
    description: "Stylish cafe chair",
    price: 25000,
    originalPrice: 35000,
    discount: "30%",
    imageUrl: "/assets/images/Table.png",
  },
  {
    id: 10,
    productName: "Leviosa",
    description: "Stylish cafe chair",
    price: 25000,
    originalPrice: 35000,
    discount: null,
    imageUrl: "/assets/images/Chair.png",
  },
  {
    id: 11,
    productName: "Lolito",
    description: "Luxury big sofa",
    price: 70000,
    originalPrice: 140000,
    discount: "50%",
    imageUrl: "/assets/images/Sofa.png",
  },
  {
    id: 12,
    productName: "Respira",
    description: "Outdoor bar table and stool",
    price: 5000,
    originalPrice: null,
    discount: "New",
    imageUrl: "assets/images/LivingSpace.png",
  },
  {
    id: 13,
    productName: "Syltherine",
    description: "Stylish cafe chair",
    price: 25000,
    originalPrice: 35000,
    discount: "30%",
    imageUrl: "/assets/images/Table.png",
  },
  {
    id: 14,
    productName: "Leviosa",
    description: "Stylish cafe chair",
    price: 25000,
    originalPrice: 35000,
    discount: null,
    imageUrl: "/assets/images/Chair.png",
  },
  {
    id: 15,
    productName: "Lolito",
    description: "Luxury big sofa",
    price: 70000,
    originalPrice: 140000,
    discount: "50%",
    imageUrl: "/assets/images/Sofa.png",
  },
  {
    id: 16,
    productName: "Respira",
    description: "Outdoor bar table and stool",
    price: 5000,
    originalPrice: null,
    discount: "New",
    imageUrl: "assets/images/LivingSpace.png",
  },
];

const formatCurrency = (price: number) => {
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};

const ListSection = () => {
  return (
    <div className="flex justify-center px-36 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {productDetails.map((product) => (
          <div key={product.id} className="">
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full h-80 object-cover"
              />
              {product.discount && (
                <div
                  className={`absolute top-2 right-2 text-white text-xs rounded-full px-1 py-3 font-poppins ${
                    product.discount === "New"
                      ? "bg-[#2EC1AC] px-2" // Green badge for "New"
                      : "bg-[#E97171]" // Red badge for percentage discount
                  }`}
                >
                  {product.discount === "New" ? "New" : `- ${product.discount}`}
                </div>
              )}
            </div>
            <div className="py-4 px-4 flex flex-col gap-2 bg-[#F4F5F7]">
              <Typography
                variant="h3"
                className="text-xl font-semibold font-poppins"
              >
                {product.productName}
              </Typography>
              <Typography
                variant="h3"
                className="text-gray-500 font-lg font-medium font-poppins"
              >
                {product.description}
              </Typography>
              <div className="flex flex-row justify-between items-center">
                <Typography
                  variant="p"
                  className="text-xl font-semibold text-black font-poppins  "
                >
                  {formatCurrency(product.price)}
                </Typography>
                {product.originalPrice && (
                  <Typography
                    variant="p"
                    className="line-through text-gray-500 pr-2 font-poppins"
                  >
                    {formatCurrency(product.originalPrice)}
                  </Typography>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSection;
