import axios from "axios";
const axiosPublic = axios.create({
  // TODO: Replace with your own API endpoint
  // https://localhost:500 or your actual API endpoint
  // https://server-uc-shop.vercel.app/
  baseURL: "https://server-uc-shop.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
