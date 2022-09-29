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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
// const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: "Dataset 1",
//       data: labels.map(() => Math.ceil(Math.random() * (1000 - 100) + 100)),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//     {
//       fill: true,
//       label: "Dataset 2",
//       data: labels.map(() => Math.ceil(Math.random() * (1000 - 100) + 100)),
//       backgroundColor: "rgba(63, 172, 245, 0.5)",
//     },
//     {
//       fill: true,
//       label: "Dataset 3",
//       data: labels.map(() => Math.ceil(Math.random() * (1000 - 100) + 100)),
//       backgroundColor: "rgba(73, 182, 255, 0.5)",
//     },
//   ],
// };

export function AreaChart({ data }) {
  return data && <Line options={options} data={data} height="100%" />;
}

export function LineChart({ data, options }) {
  return data && <Line options={options} data={data} height="200px" />;
}

export default AreaChart;
