import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (searchParams = {}) => {

  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: products = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["products", searchParams],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`, {
        params: searchParams,
      });
      return res.data;
    },
    enabled: !!searchParams,
  });
  return [products, loading, refetch];
};

export default useProducts;
