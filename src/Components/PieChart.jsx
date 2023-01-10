import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const randomData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
      label: "Population",
    },
  ],
};

function PieChart({ data, options }) {
  return (
    data && (
      <div>
        <Pie data={randomData} options={options} style={{ height: "300px" }} />
      </div>
    )
  );
}

export default PieChart;
