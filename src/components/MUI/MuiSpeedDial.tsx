import {
  Edit,
  EditNote,
  FileCopyOutlined,
  Print,
  Share,
} from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const MuiSpeedDial = () => {
  return (
    <div>
      <SpeedDial
        ariaLabel="Navigation Speed Dial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditNote />} icon={<Edit />} />}
      >
        <SpeedDialAction icon={<FileCopyOutlined />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
        <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
      </SpeedDial>
    </div>
  );
};

export default MuiSpeedDial;
