// import axios from "axios";

// const API_URL = "http://localhost:5136"; // Replace with your API URL

// export interface Product {
//   Id: number;
//   ProductName: string;
//   Description: string;
//   Price: number;
//   OriginalPrice: number;
//   Discount: number;
//   ImageURL: string;
//   Information: string;
//   AdditionalInformation: string;
//   SKU: string;
//   Category: string;
//   Tags: string;
// }

// export const getProducts = async (): Promise<Product[]> => {
//   try {
//     const response = await axios.get<Product[]>(`${API_URL}/api/product`);
//     return response.data; // Return the list of products
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error; // Rethrow the error for handling in components
//   }
// };

// api.ts (or your existing API file)
import axios from "axios";

const API_URL = "http://localhost:5136"; // Your API URL

export interface Product {
  id: number;
  productName: string;
  description: string;
  price: number;
  type: string;
  originalPrice: number;
  discount: string;
  imageURL: string;
  information: string;
  additionalInformation: string;
  SKU: string;
  category: string;
  tags: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_URL}/api/product`);
  console.log("response: ", response.data);
  return response.data;
};
