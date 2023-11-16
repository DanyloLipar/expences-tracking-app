import React, { useState } from "react";
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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Container, MenuItem, Select, Typography } from "@mui/material";
import CustomArrowIcon from "../CustomArrowIcon";
import { analyticsData } from "../../../core/constants/analyticsData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const AnalyticsDiagram = () => {
  const [year, setYear] = useState<number>(2022);

  const selectedYear = () => {
    return analyticsData.find((dataYear: any) => dataYear.id === year)
      ?.expenses;
  };

  const scalesColors = () => {
    const selectedYear: any = analyticsData.find(
      (dataYear: any) => dataYear.id === year
    );

    const maxNumIndex = selectedYear.expenses.indexOf(
      Math.max(...selectedYear.expenses)
    );

    const item = selectedYear.expenses.map((_: any, index: number) =>
      index === maxNumIndex ? "#8234F8" : "#A3A3A3"
    );

    return item;
  };

  const backgroundColors = () => {
    const selectedYear: any = analyticsData.find(
      (dataYear: any) => dataYear.id === year
    );

    const maxNumIndex = selectedYear.expenses.indexOf(
      Math.max(...selectedYear.expenses)
    );

    const item = selectedYear.expenses.map((_: any, index: number) =>
      index === maxNumIndex ? "#8234F8" : "#FAFAFA"
    );

    return item;
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        beginAtZero: false,
        ticks: {
          color: scalesColors(),
          fontSize: 13,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "2022",
        data: selectedYear(),
        backgroundColor: backgroundColors(),
        borderRadius: 6,
        datalabels: {
          display: true,
          color: scalesColors(),
          anchor: "end" as "end",
          align: "end" as "end",
          formatter: function (value: any) {
            return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
      },
    ],
  };

  return (
    <Container className="mt-[36px]">
      <Box className="flex flex-col items-center justify-between">
        <div className="flex flex-wrap justify-between w-[100%]">
          <Typography variant="h4" fontWeight="medium">
            Analytics
          </Typography>
          <Select
            labelId="demo-select-small-label"
            className="bg-orange w-[max-content]"
            IconComponent={CustomArrowIcon}
            style={{
              color: "#fff",
              fontSize: "13px",
              borderRadius: "12px",
              outline: "none",
              border: "none",
            }}
            value={year}
            onChange={(event) => {
              setYear(Number(event.target.value));
            }}
          >
            <MenuItem value={2023}>{`Year  -  2023`}</MenuItem>
            <MenuItem value={2022}>{`Year  -  2022`}</MenuItem>
          </Select>
        </div>
        <Bar options={options} data={data} />
      </Box>
    </Container>
  );
};

export default AnalyticsDiagram;
