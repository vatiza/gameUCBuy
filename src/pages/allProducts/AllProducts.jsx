import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import { Divider, Slider } from "@nextui-org/react";
import ProductsCard from "../../components/shared/productsCard/productsCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllProducts = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  let category = query.get("category");
  console.log(category);
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
    <div className="flex flex-row">
      <div className="hidden lg:block  basis-1/3 ">
        <div className="border rounded-lg p-5">
          <h1 className=" ">Filter by price</h1>
          <div className="flex flex-col gap-6 w-full max-w-md">
            <Slider
              size="sm"
              step={0.01}
              maxValue={1}
              minValue={0}
              aria-label="Temperature"
              defaultValue={0.2}
              className="max-w-md"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between ">
          <h1 className="uppercase text-xl font-bold lg:text-3xl ms-4">
            {category}{" "}
          </h1>
          <div className="mr-8">
            <label>Sort By:</label>
            <select value="" onChange={(e) => setOrder(e.target.value)}>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <Divider />
        <div className=" grid grid-cols-2 lg:grid-cols-4 p-3 gap-2.5">
          {products.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
