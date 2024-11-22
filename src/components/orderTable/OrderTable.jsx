import {
  Chip,
  Code,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import moment from "moment";
const OrderTable = ({ orders }) => {
  if (orders.length === 0) return <p>No orders found.</p>;
  const statusColorMap = {
    completed: "success",
    cancelled: "danger",
    pending: "primary",
  };
  const paymentGatewayColorMap = {
    Bkash: "danger",
    Nagad: "warning",
    Rocket: "primary",
  };
  return (
    <Table aria-label="Order Items Table">
      <TableHeader>
        <TableColumn>Product Title</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Tracking ID</TableColumn>
        <TableColumn>Payment Method</TableColumn>
        <TableColumn>Payment Number</TableColumn>
        <TableColumn> Date</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        {orders.map((order) =>
          order.items.map((item) => (
            <TableRow key={`${order._id}`}>
              <TableCell>
                <User
                  avatarProps={{ radius: "lg", src: item.image }}
                  name={item.productTitle}
                  description={item.uc}
                ></User>
              </TableCell>
              <TableCell>{item.productPrice}৳</TableCell>
              <TableCell>
                <Code size="sm" color="success">
                  {order._id}
                </Code>
              </TableCell>
              <TableCell>
                <Chip
                  color={paymentGatewayColorMap[order.paymentGateway]}
                  size="sm"
                  variant="flat"
                >
                  {order.paymentGateway}
                </Chip>
              </TableCell>
              <TableCell>{order.paymentNumber}</TableCell>
              <TableCell>{moment(order?.date).format("LL")}</TableCell>
              <TableCell>
                {" "}
                <Chip
                  className="capitalize"
                  color={statusColorMap[order.status]}
                  size="sm"
                  variant="flat"
                >
                  {order.status}
                </Chip>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default OrderTable;
