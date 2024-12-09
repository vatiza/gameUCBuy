import { useState } from "react";
import useGetAllOrders from "../../../hooks/useGetAllOrders";
import ViewOrderTable from "./ViewOrderTable";

const DashTable = () => {
  const [filter, setFilter] = useState("all");
  const [allOrders, refetch, loading] = useGetAllOrders(filter);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    refetch();
  };

  return (
    <div className="mt-5 p-5 ">
      <h1 className="text-xl ">All Orders</h1>
      <div>
        <label>Filter By:</label>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border-2 border-gray-300  rounded-md"
        >
          <option value="all">All</option>
          <option className="text-primary-500" value="pending">
            Pending
          </option>
          <option className="text-success-500" value="completed">
            Completed
          </option>
          <option className=" text-danger-500" value="cancelled">
            Cancelled
          </option>
        </select>
      </div>
      <div className="mt-3">
        {loading ? <p>Loading...</p> : <ViewOrderTable orders={allOrders} />}
      </div>
    </div>
  );
};

export default DashTable;
