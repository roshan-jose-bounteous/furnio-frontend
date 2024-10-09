import axios from "axios";
import { Product } from "@/types/types";

const API_URL = "http://localhost:5136"; // Your API URL

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_URL}/api/product`);
  console.log("response: ", response.data);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product | null> => {
  try {
    const response = await axios.get<Product>(`${API_URL}/api/product/${id}`);
    console.log("Fetched product:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null; // Return null if there's an error
  }
};
