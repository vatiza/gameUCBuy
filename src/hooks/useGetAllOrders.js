import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllOrders = (filter) => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: allOrders = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["allOrders", filter],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allorders?status=${filter}`);
      return res.data;
    },
    refetchInterval: 30000,
  });
  return [allOrders, refetch, loading];
};

export default useGetAllOrders;
