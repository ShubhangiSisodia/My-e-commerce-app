import axios from "axios";

const BASE_URL = "https://fakerapi.it/api/v2/products?_quantity=12";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to load products");
  }
};
