import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => Math.ceil(Math.random() * (10000 - 1000) + 1000)),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => Math.ceil(Math.random() * (1000 - 100) + 100)),
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

function BarChart({ data }) {
  return <div>{data && <Bar options={options} data={data} />}</div>;
}

export default BarChart;
