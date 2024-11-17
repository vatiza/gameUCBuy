import useOrders from "../../hooks/useOrders";
import OrderTable from "../../components/orderTable/OrderTable";
import { Divider } from "@nextui-org/react";
import { useState } from "react";

const MyOrders = () => {
  const [filter, setFilter] = useState("all");
  const [orders, refetch, loading] = useOrders(filter);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    refetch();
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">My Orders</h1>
        <div>
          <label>Filter By:</label>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="border-2 border-gray-300  rounded-md"
          >
            <option value="all">All</option>
            <option className="text-primary-500" value="pending">Pending</option>
            <option className="text-success-500"  value="completed">Completed</option>
            <option className=" text-danger-500" value="cancelled">
              Cancelled
            </option>
          </select>
        </div>
      </div>

      <Divider />

      <div className="mt-3">
        {loading ? <p>Loading...</p> : <OrderTable orders={orders} />}
      </div>
    </div>
  );
};

export default MyOrders;
