import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useGetAllOrders from "../../../hooks/useGetAllOrders";
import PieChartShow from "./PieChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const pathName = window.location.pathname;
  console.log(pathName);
  const [orders] = useGetAllOrders("all");

  const bkashData = orders.filter((data) => data.paymentGateway === "Bkash");
  const nagadData = orders.filter((data) => data.paymentGateway === "Nagad");
  const rocketData = orders.filter((data) => data.paymentGateway === "Rocket");
  const totalAmmout = orders.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const data = {
    labels: [
      ...new Set(
        orders.map((data) => new Date(data.date).toLocaleDateString())
      ),
    ],
    datasets: [
      {
        label: "Bkash ",
        data: bkashData.map((data) => data.totalPrice),
        borderColor: "#F70872",
        backgroundColor: "#F70872",
        tension: 0.4,
      },
      {
        label: "Nagad ",
        data: nagadData.map((data) => data.totalPrice),
        borderColor: "#F26422",
        backgroundColor: "#F26422",
        tension: 0.4,
      },
      {
        label: "Rocket ",
        data: rocketData.map((data) => data.totalPrice),
        borderColor: "#8A288F",
        backgroundColor: "#8A288F",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Analytics: Bkash, Nagad, and Rocket",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl">
        Total Amount:
        <span className="text-pink-500 font-semibold"> {totalAmmout} BDT</span>
      </h2>
      {pathName === "/dashboard/analytics" && <PieChartShow />}{" "}
      <Line data={data} options={options} />
    </div>
  );
};

export default Analytics;
