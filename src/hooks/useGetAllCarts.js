import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllCarts = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: allCarts = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["allCarts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allcarts");
      return res.data;
    },
  });
  return [allCarts, refetch, loading];
};

export default useGetAllCarts;
