import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
  const [showDrawer, setShowMenu] = useState(false);
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setShowMenu(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => setShowMenu(false)}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};

export default MuiDrawer;
