import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { data as values } from "@/data";
import { tickFormatter } from "@/utils/tickFormatter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.5,
  interaction: {
    mode: "index" as const,
  },
  plugins: {
    legend: {
      position: "bottom" as const,
      align: "start" as const,
      labels: {
        boxHeight: 0,
        boxWidth: 41,
      },
    },
    title: {
      display: true,
      text: "Payments per day",
      position: "left" as const,
      align: "center" as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      ticks: {
        align: "end" as const,
        padding: 10,
        count: 6,
        callback: tickFormatter,
      },
      border: {
        display: false,
      },
    },
  },
};

const labels = values.map((data) => data.day);

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Current Period",
      data: values.map((data) => data["Current Period"]),
      borderColor: "rgba(255, 26, 255, 1)",
      pointStyle: false as const,
      backgroundColor: "rgba(255,26,255,0.05)",
    },
    {
      label: "Previous Period",
      data: values.map((data) => data["Previous Period"]),
      borderColor: "rgba(255, 153, 255, 1)",
      borderDash: [5, 5],
      pointStyle: false as const,
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}