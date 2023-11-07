import axios from "axios";

const baseURL = "https://api.escuelajs.co/api/v1";

const axiosInstance = axios.create({
  baseURL,
});

export const fetchProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};
