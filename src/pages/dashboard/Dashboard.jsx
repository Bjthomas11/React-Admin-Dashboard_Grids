import { Box } from "@mui/material";
import Header from "../../components/header/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="spaceBetween" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;