import axios from "axios";
const axiosPublic = axios.create({
  // TODO: Replace with your own API endpoint
  baseURL: "https://server-uc-shop.vercel.app/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
