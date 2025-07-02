import React, { useEffect, useRef } from "react";
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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Sample data representing the chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Tasks",
        data: [10, 25, 40, 75, 75, 75, 75],
        backgroundColor: "#99cfb5", // Light green
        borderColor: "#99cfb5",
        borderWidth: 0,
      },
      {
        label: "Overdue Tasks",
        data: [5, 10, 20, 15, 15, 15, 15],
        backgroundColor: "#ffdd9d", // Light yellow/orange
        borderColor: "#ffdd9d",
        borderWidth: 0,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0,
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12,
          },
          color: "#9CA3AF",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false, // Hide individual tick labels
        },
        title: {
          display: true,
          text: "Departments",
          color: "#9CA3AF",
          font: {
            size: 12,
            weight: "normal",
          },
          padding: {
            top: 10,
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
          font: {
            size: 12,
          },
          callback: function (value) {
            return value + "%";
          },
          stepSize: 20,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 0,
        borderSkipped: false,
      },
    },
  };

  return (
    <div className="w-full h-full bg-white">
      <div className="h-full relative">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
