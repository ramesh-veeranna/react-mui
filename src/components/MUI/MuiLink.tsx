import React from "react";
import { Stack, Link } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="/">Mui Link</Link>
      <Link href="/" underline="none">
        Mui Link
      </Link>
    </Stack>
  );
};

export default MuiLink;
