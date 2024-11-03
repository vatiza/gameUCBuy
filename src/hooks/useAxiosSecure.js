import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // TODO: Replace with your own API endpoint
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("jwt");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
  axiosSecure.interceptors.response.use(
    function (res) {
      return res;
    },
    async (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        await logoutUser();
        navigate("/login", { replace: true });
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
