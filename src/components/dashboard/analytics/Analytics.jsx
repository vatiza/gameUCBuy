import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useGetAllOrders from "../../../hooks/useGetAllOrders";

const Analytics = () => {
  const [orders] = useGetAllOrders();

  const chartData = orders.map((order) => ({
    paymentGateway: order.paymentGateway,
    totalPrice: order.totalPrice,
    date: new Date(order.date).toLocaleDateString(),
  }));

  return (
    <div className="mt-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalPrice"
            name="Total Price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="paymentGateway"
            name="Payment Gateway"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
