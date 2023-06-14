import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/header/Header";
import GeographyChart from "../../components/geographyChart/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="GEOMAP CHART" subTitle="GeoMap" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
