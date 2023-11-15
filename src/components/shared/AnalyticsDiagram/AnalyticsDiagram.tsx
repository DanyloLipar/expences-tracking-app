import React, { useState } from "react";
import { Container, Paper, Typography, Select, MenuItem } from "@mui/material";
import { Bar } from "react-chartjs-2";

const AnalyticsDiagram = () => {
  // Sample data for the bar chart
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
    </div>
  );
};

export default AnalyticsDiagram;
