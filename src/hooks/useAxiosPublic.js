import axios from "axios";
const axiosPublic = axios.create({
  // TODO: Replace with your own API endpoint
  // https://server-uc-shop.vercel.app or your actual API endpoint
  // http://localhost:5000
  baseURL: "https://server-uc-shop.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
