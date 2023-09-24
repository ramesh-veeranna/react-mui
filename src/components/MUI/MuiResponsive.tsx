import { Box } from "@mui/material";
import React from "react";

const MuiResponsive = () => {
  return (
    <Box
      sx={{
        height: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        // xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536
        width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        bgcolor: "secondary.main",
      }}
    ></Box>
  );
};

export default MuiResponsive;
