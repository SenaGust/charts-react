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
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  tooltip: {
    intersect: true,
  },
  hover: {
    intersect: false,
  },
  plugins: {
    legend: {
      position: "bottom" as const,
      align: "start" as const,
      labels: {
        boxHeight: 0,
        boxWidth: 41,
        color: "rgba(157, 157, 156, 1)",
      },
    },
    title: {
      display: true,
      text: "Payments per day",
      position: "left" as const,
      align: "middle" as const,
      color: "rgba(157, 157, 156, 1)",
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
      ticks: {
        color: "rgba(157, 157, 156, 1)",
      },
    },
    y: {
      ticks: {
        align: "end" as const,
        padding: 10,
        count: 6,
        callback: tickFormatter,
        color: "rgba(157, 157, 156, 1)",
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
      backgroundColor: "rgba(255,26,255,0.05)",

      pointBorderColor: "rgba(0, 0, 0, 0)",
      pointBackgroundColor: "rgba(0, 0, 0, 0)",
      pointHoverBackgroundColor: "rgb(255, 99, 132)",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Previous Period",
      data: values.map((data) => data["Previous Period"]),
      borderColor: "rgba(255, 153, 255, 1)",
      borderDash: [5, 5],

      pointBorderColor: "rgba(0, 0, 0, 0)",
      pointBackgroundColor: "rgba(0, 0, 0, 0)",
      pointHoverBackgroundColor: "rgb(255, 99, 132)",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

export default function App() {
  return (
    <div
      style={{
        width: "90vw",
        height: "215px",
        backgroundColor: "white",
        paddingTop: 150,
      }}
    >
      <Line options={options} data={data} />
    </div>
  );
}
