import {
  Button,
  Chip,
  Code,
  Divider,
  Image,
  Textarea,
} from "@nextui-org/react";
import moment from "moment";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useGetAllOrders from "../../../hooks/useGetAllOrders";
import toast, { Toaster } from "react-hot-toast";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const OrderDetails = () => {
  const [, refetch] = useGetAllOrders();
  const axiosSecure = useAxiosSecure();
  const [comment, setComment] = useState("");
  const [products] = useLoaderData();
  console.log(products);
  const [submitting, setSubmitting] = useState("completed");

  const handleSubmitting = (event) => {
    setSubmitting(event.target.value);
  };
  const handleCompleteOrder = async () => {
    const res = await axiosSecure.patch(`/orderdetails/${products._id}`, {
      status: submitting,
      comment: comment,
    });
    console.log(res);
    if (res.data.modifiedCount > 0) {
      toast.success(`Order ${submitting} Successfully`);
      refetch();
    }
  };
  const paymentGatewayColorMap = {
    Bkash: "danger",
    Nagad: "warning",
    Rocket: "primary",
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
          {products?.comment && (
            <Code className="mt-1" color="danger">
              Comment: {products?.comment}
            </Code>
          )}
          <br />
          <Chip
            className="capitalize my-1"
            color={statusColorMap[products.status]}
            variant="shadow"
            radius="sm"
          >
            Status: {products?.status}
          </Chip>
        </div>
        {/* payment details */}
        <div>
          <Code
            className="p-3"
            color={paymentGatewayColorMap[products.paymentGateway]}
          >
            <h1 className="text-2xl flex items-center gap-3">
              Amount:{products.totalPrice}
              <FaBangladeshiTakaSign size={20} />
            </h1>
            <Chip
              radius="sm"
              variant="flat"
              color={paymentGatewayColorMap[products.paymentGateway]}
            >
              Payment Gateway:{products.paymentGateway}
            </Chip>
            <br />
            <Chip
              className="mt-2"
              radius="sm"
              variant="dot"
              color={paymentGatewayColorMap[products.paymentGateway]}
            >
              Transaction Id:{products.transactionId}
            </Chip>
            <br />
            <Chip
              className="mt-2"
              radius="sm"
              variant="dot"
              color={paymentGatewayColorMap[products.paymentGateway]}
            >
              Payment Number:{products.paymentNumber}
            </Chip>
          </Code>
        </div>
      </div>
      <div>
        <div className="border mt-5 p-3 rounded-md">
          <div className="">
            {products?.items?.map((item, index) => (
              <div key={index}>
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
            <div>
              <select
                value={submitting}
                onChange={handleSubmitting}
                className="border-2 border-gray-300 rounded-md"
              >
                <option className="text-success-500" value="completed">
                  Completed
                </option>
                <option className="text-danger-500" value="cancelled">
                  Cancelled
                </option>
              </select>
            </div>
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
        <div className="mt-4">
          {submitting === "cancelled" && (
            <div>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="max-w-xs"
                placeholder="Describe why it was cancelled."
              />
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default OrderDetails;
