import React from "react";
import { Line } from "react-chartjs-2";
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
import graphData from "@/mockdata/graphData.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function StockGraph({ symbol }) {
  const stockPrices = graphData[symbol];

  // Check if the graph data for the symbol exists
  if (!stockPrices) {
    return <p>No graph data available for {symbol}</p>;
  }

  const data = {
    labels: ["Jan", "March", "May", "Aug", "Sept"], // Placeholder labels for time intervals
    datasets: [
      {
        label: `${symbol} Price`,
        data: stockPrices,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${symbol} Stock Price Over Time`,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Interval",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
}
