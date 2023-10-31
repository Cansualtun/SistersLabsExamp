import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

// bu axios instancesini tekrar tekrar kullanmak için yazıyoruz. kod tekrarına düşmemek için
const axiosInstance = axios.create({
  baseURL,
});

export const fetchPhotos = async () => {
  const response = await axiosInstance.get("/photos");
  return response.data;
};

export const fetchPhoto = async (id) => {
  const response = await axiosInstance.get(`/photos/${id}`);
  return response.data;
};
