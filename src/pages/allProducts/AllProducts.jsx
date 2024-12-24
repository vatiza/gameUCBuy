import { Divider } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import ProductsCard from "../../components/shared/productsCard/productsCard";
import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
  const category = useLocation().state;

  const [products, loading] = useProducts();
  const filterProdcuts = products.filter(
    (product) => product.category === category
  );
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">All Products</h1>
      <Divider />
      <div className="mt-5 lg:mx-5">
        {loading ? (
          <>loading...</>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {filterProdcuts.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
