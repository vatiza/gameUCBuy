import { Button, Chip, Divider, Image } from "@nextui-org/react";
import moment from "moment";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DashTable from "../../../components/dashboard/table/DashTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useGetAllOrders from "../../../hooks/useGetAllOrders";

const OrderDetails = () => {
  const [, refetch] = useGetAllOrders();
  const axiosSecure = useAxiosSecure();
  const [products] = useLoaderData();
  const [submitting, setSubmitting] = useState([]);
  console.log(submitting);
  const handleSubmitting = (event) => {
    setSubmitting(event.target.value);
  };
  const handleCompleteOrder = async () => {
    const res = await axiosSecure.patch(`/orderdetails/${products._id}`, {
      status: `${submitting}`,
    });
    if (res.status === 200) {
      alert("Order Completed Successfully");
      refetch();
    }
  };

  const statusColorMap = {
    completed: "success",
    cancelled: "danger",
    pending: "primary",
  };
  return (
    <div>
      <h1>Order Details</h1>
      <div className="flex flex-col lg:flex-row border p-3 rounded-md justify-between">
        <div>
          <h1>Customer Name:{products.name}</h1>
          <h1>Email:{products.email}</h1>
          <h1>Phone: {products.phone}</h1>
          <h1>Date: {moment(products.date).format("LL")}</h1>
          <Chip
            className="capitalize"
            color={statusColorMap[products.status]}
            size="sm"
            variant="shadow"
          >
            Status: {products.status}
          </Chip>
          <h1>Note: {products?.note}</h1>
        </div>
        <div>
          <h1>Total Price:{products.totalPrice}</h1>
          <h1>Payment Gateway:{products.paymentGateway}</h1>
          <h1>Payment Number:{products.paymentNumber}</h1>
          <h1>Transaction Id:{products.transactionId}</h1>
        </div>
      </div>
      <div>
        <div className="border mt-5 p-3 rounded-md">
          <div className="">
            {products.items.map((item) => (
              <div key={item._id}>
                <Divider className="my-2" />
                <div className="flex justify-between ">
                  <div className="flex gap-2 mt-3  ">
                    <Image
                      height={70}
                      width={100}
                      className="object-cover"
                      src={item.image}
                      alt={item.title}
                    />

                    <div>
                      <h1>{item.productTitle}</h1>
                      <h1>
                        {item.uc} {item.productPrice}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h1>Player Id:{item.playerId}</h1>
                    <h1>Player Name:{item.playerName}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <div>
            <select
              value={submitting}
              onChange={handleSubmitting}
              className="border-2 border-gray-300  rounded-md"
            >
              <option
                defaultValue
                className="text-success-500"
                value="completed"
              >
                Completed
              </option>
              <option className=" text-danger-500" value="cancelled">
                Cancelled
              </option>
            </select>
          </div>
          <div>
            <Button
              onClick={() => handleCompleteOrder()}
              size="sm"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <DashTable />
    </div>
  );
};

export default OrderDetails;
