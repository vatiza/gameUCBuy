import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const ViewOrderTable = ({ orders }) => {
  console.log(orders);
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
    <div>
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
          <TableRow key="1">
            <TableCell>
              <h1>hello</h1>
            </TableCell>
            <TableCell>৳</TableCell>
            <TableCell>smafs</TableCell>
            <TableCell>fsdafk</TableCell>
            <TableCell>dsaf</TableCell>
            <TableCell>sadfs</TableCell>
            <TableCell> dsfas</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>
              <h1>hello</h1>
            </TableCell>
            <TableCell>৳</TableCell>
            <TableCell>smafs</TableCell>
            <TableCell>fsdafk</TableCell>
            <TableCell>dsaf</TableCell>
            <TableCell>sadfs</TableCell>
            <TableCell> dsfas</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>
              <h1>hello</h1>
            </TableCell>
            <TableCell>৳</TableCell>
            <TableCell>smafs</TableCell>
            <TableCell>fsdafk</TableCell>
            <TableCell>dsaf</TableCell>
            <TableCell>sadfs</TableCell>
            <TableCell> dsfas</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewOrderTable;
