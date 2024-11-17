import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = (filter) => {
  console.log(filter);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: orders = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["orders", user?.email, filter],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/orders?email=${user.email}&status=${filter}`
      );
      return res.data;
    },
  });
  return [orders, refetch, loading];
};

export default useOrders;
