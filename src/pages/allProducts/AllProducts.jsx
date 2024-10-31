import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductsCard from "../../components/shared/productsCard/productsCard";

const AllProducts = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  let category = query.get("category");
  const axiosPublic = useAxiosPublic();
  const { data: products = [], isLoading: loading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?category=${category}`);
      return res.data;
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1> SHow all PRoducts</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 p-3 gap-2.5">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
