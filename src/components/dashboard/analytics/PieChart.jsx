import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import useGetAllOrders from "../../../hooks/useGetAllOrders";

// Register Chart.js components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartShow = () => {
  const [orders] = useGetAllOrders("all");

  // Calculate total amount per payment gateway
  const paymentGatewayTotals = orders.reduce((acc, order) => {
    acc[order.paymentGateway] =
      (acc[order.paymentGateway] || 0) + order.totalPrice;
    return acc;
  }, {});

  // Prepare data for Pie chart
  const data = {
    labels: Object.keys(paymentGatewayTotals), // Payment gateways
    datasets: [
      {
        label: "Payment Gateway Share",
        data: Object.values(paymentGatewayTotals), // Total amounts per gateway
        backgroundColor: ["#F26422", "#F70872", "#8A288F"],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const total = Object.values(paymentGatewayTotals).reduce(
              (sum, value) => sum + value,
              0
            );
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
      datalabels: {
        display: true,
        color: "#ffff",
        formatter: (value) => value,
        font: {
          size: 17,
        },
      },
    },
  };

  return (
    <div style={{ width: "200px", margin: "0 auto" }}>
      <h2>Payment Gateway Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartShow;
