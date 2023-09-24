import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress color="info" />
      <CircularProgress color="warning" />
      <CircularProgress color="error" />
      <CircularProgress variant="determinate" value={70} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress color="info" />
      <LinearProgress color="warning" />
      <LinearProgress color="error" />

      <LinearProgress variant="determinate" value={34} />
      <LinearProgress color="success" variant="determinate" value={43} />
      <LinearProgress color="info" variant="determinate" value={77} />
      <LinearProgress color="warning" variant="determinate" value={25} />
      <LinearProgress color="error" variant="determinate" value={94} />
    </Stack>
  );
};

export default MuiProgress;
