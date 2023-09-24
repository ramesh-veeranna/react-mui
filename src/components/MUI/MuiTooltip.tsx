import { Delete as DeleteIcon } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const MuiTooltip = () => {
  return (
    <div>
      <Tooltip title="Delete" placement="left">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete" placement="top" arrow>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Delete"
        placement="right"
        arrow
        enterDelay={400}
        leaveDelay={700}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MuiTooltip;
