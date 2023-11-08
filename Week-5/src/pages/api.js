import axios from "axios";

const baseURL = "https://api.escuelajs.co/api/v1/products";

const axiosInstance = axios.create({
  baseURL,
});

// tüm ürünler için
export const fetchProducts = async () => {
  const response = await axiosInstance.get();
  return response.data;
};

// ürün detayı için
export const fetchProduct = async (id) => {
  const response = await axiosInstance.get(`/${id}`);
  return response.data;
};
