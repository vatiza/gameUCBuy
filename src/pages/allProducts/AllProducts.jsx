import useProducts from "../../hooks/useProducts";
import ProductsCard from "../../components/shared/productsCard/productsCard";
import { Divider } from "@nextui-org/react";

const AllProducts = () => {
  const [products, loading] = useProducts();
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">All Products</h1>

      <Divider />

      <div className="mt-5">
        {loading ? (
          <>loading...</>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {products.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
