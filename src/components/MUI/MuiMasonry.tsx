import React from "react";
import { Masonry } from "@mui/lab";
import { Box, Paper } from "@mui/material";

const heights = [
  120, 150, 190, 140, 180, 170, 184, 152, 164, 158, 197, 156, 153, 156, 184,
  156, 196, 175, 144,
];

const MuiMasonry = () => {
  return (
    <Box sx={{ width: "100%", minHeight: 700 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height,
              border: "1px solid #ddd",
            }}
          >
            {index + 1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
