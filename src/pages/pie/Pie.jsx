import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header/Header";
import PieChart from "../../components/pieChart/PieChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subTitle="Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Bar;
