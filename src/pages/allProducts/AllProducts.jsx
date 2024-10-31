import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  let category = query.get("category");
  console.log(category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:5000/products?category=${category}`
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [category]);
  console.log(products);

  return (
    <div>
      <h1> SHow all PRoducts</h1>
    </div>
  );
};

export default AllProducts;
