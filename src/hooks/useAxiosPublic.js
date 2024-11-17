import axios from "axios";
const axiosPublic = axios.create({
  // TODO: Replace with your own API endpoint
  // https://localhost:500 or your actual API endpoint
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
