import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockGraph = ({ historicalPrices }) => {
  // Process data for chart
  const chartData = {
    labels: historicalPrices?.map((entry) => new Date(entry?.Datetime)),
    datasets: [
      {
        label: "Open Price",
        data: historicalPrices?.map((entry) => ({
          x: new Date(entry?.Datetime),
          y: entry?.Open,
        })),
        borderColor: "blue",
        fill: false,
      },
      // Add similar datasets for other data points (High, Low, Close, Volume)
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div className="container-fluid">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default StockGraph;
