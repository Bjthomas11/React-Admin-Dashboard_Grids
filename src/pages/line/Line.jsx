import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header/Header";
import LineChart from "../../components/lineChart/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line CHART" subTitle="Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
