import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header/Header";
import BarChart from "../../components/barChart/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subTitle="Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
