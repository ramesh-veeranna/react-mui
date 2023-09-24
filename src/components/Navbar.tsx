import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type NavbarProps = {
  title: string;
};

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(showMenu);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowMenu(event.currentTarget);
  };
  const handleClose = () => {
    setShowMenu(null);
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onChange={() => {
            navigate("/");
          }}
        >
          <AssignmentIndIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          Material UI
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Home</Button>
          <Button
            color="inherit"
            id="components-btn"
            onClick={handleClick}
            aria-controls={open ? "components-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Components
          </Button>
          <Button color="inherit">Icons</Button>
          <Button color="inherit">Help Center</Button>
        </Stack>
        <Menu
          id="components-menu"
          anchorEl={showMenu}
          open={open}
          MenuListProps={{
            "aria-labelledby": "components-btn",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Typography</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
