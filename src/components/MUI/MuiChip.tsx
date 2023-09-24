import { Face } from "@mui/icons-material";
import { Avatar, Chip, Grid, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3", "Chip 4"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack direction={"row"} spacing={1}>
          <Chip label="Default Chip" />
          <Chip label="Primary Chip" color="primary" />
          <Chip
            label="Primary Chip With Icon"
            color="primary"
            icon={<Face />}
          />
        </Stack>
        <Stack direction={"row"} spacing={1} m={2}>
          <Chip label="Small Primary Chip" color="primary" size="small" />
          <Chip
            label="Outlined Primary Chip"
            color="primary"
            variant="outlined"
          />
          <Chip
            label="Outlined Primary Chip With Avatar"
            color="primary"
            variant="outlined"
            avatar={<Avatar>R</Avatar>}
          />
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Chip
            label="Clickable"
            color="success"
            onClick={() => alert("Clicked")}
          />
          <Chip
            label="Delete"
            color="error"
            onClick={() => alert("Clickable & Delete")}
            onDelete={() => alert("Chip deleted")}
          />
        </Stack>
        <Stack direction={"row"} spacing={1} m={2}>
          {chips.map((chip) => (
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MuiChip;
