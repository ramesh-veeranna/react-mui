import {
  AddCircleOutline,
  Favorite,
  Home,
  Person,
  Settings,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Favorite" icon={<Favorite />} />
        <BottomNavigationAction label="Post Now" icon={<AddCircleOutline />} />
        <BottomNavigationAction label="Settings" icon={<Settings />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    </div>
  );
};

export default MuiBottomNavigation;
