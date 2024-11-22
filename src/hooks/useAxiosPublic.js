import axios from "axios";
const axiosPublic = axios.create({
  // TODO: Replace with your own API endpoint
  // http://localhost:5000 or your actual API endpoint
  // http://localhost:5000/
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
