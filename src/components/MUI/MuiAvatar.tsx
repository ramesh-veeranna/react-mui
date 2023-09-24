import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Box m={4}>
      <Stack direction={"row"} spacing={1} p={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>RV</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>R</Avatar>
        <Avatar sx={{ bgcolor: "secondary.light" }}>P</Avatar>
        <Avatar sx={{ bgcolor: "info.light" }}>S</Avatar>
        <Avatar sx={{ bgcolor: "warning.light" }}>V</Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>K</Avatar>
      </Stack>
      <Stack direction={"row"} spacing={1} p={1}>
        <Avatar
          src="https://randomuser.me/api/portraits/women/11.jpg"
          alt="Raj Tarun"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/43.jpg"
          alt="Raj Tarun"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/25.jpg"
          alt="Raj Tarun"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/16.jpg"
          alt="Raj Tarun"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/27.jpg"
          alt="Raj Tarun"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/34.jpg"
          alt="Raj Tarun"
        />
      </Stack>
      <Stack direction={"row"} spacing={1} p={1}>
        <AvatarGroup>
          <Avatar
            src="https://randomuser.me/api/portraits/women/91.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/92.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/93.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/94.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/95.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/96.jpg"
            alt="Raj Tarun"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1} p={1}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/77.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/78.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/80.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="Raj Tarun"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/82.jpg"
            alt="Raj Tarun"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1} p={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 64, height: 64 }}
        >
          RV
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 64, height: 64 }}
        >
          R
        </Avatar>
        <Avatar sx={{ bgcolor: "secondary.light", width: 64, height: 64 }}>
          P
        </Avatar>
      </Stack>
      <Stack direction={"row"} spacing={1} p={1}>
        <Avatar variant="square" sx={{ bgcolor: "info.light" }}>
          S
        </Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: "warning.light" }}>
          V
        </Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>K</Avatar>
      </Stack>
    </Box>
  );
};

export default MuiAvatar;
