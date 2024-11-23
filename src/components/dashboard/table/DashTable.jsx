import useGetAllOrders from "../../../hooks/useGetAllOrders";
import ViewOrderTable from "./ViewOrderTable";

const DashTable = () => {
  const [allOrders, , loading] = useGetAllOrders();
  return (
    <div className="mt-5 p-5 ">
      <h1 className="text-xl ">All Orders</h1>

      <div className="mt-3">
        {loading ? <p>Loading...</p> : <ViewOrderTable orders={allOrders} />}
      </div>
    </div>
  );
};

export default DashTable;
