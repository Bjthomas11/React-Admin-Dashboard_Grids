import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        sx={{ mb: "5px" }}
        color={colors.grey[100]}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography variant="h6" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
