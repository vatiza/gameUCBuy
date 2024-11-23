import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTotalUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: totalUsers = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["totalUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
    refetchInterval: 60000, // refetch every 60 seconds
  });
  return [totalUsers, refetch, loading];
};

export default useTotalUser;
