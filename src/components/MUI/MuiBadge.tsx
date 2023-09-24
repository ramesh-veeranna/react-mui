import { Badge, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <div>
      <Stack spacing={2} direction={"row"}>
        <Badge badgeContent={5} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={0} color="warning">
          <MailIcon />
        </Badge>
        <Badge badgeContent={127} color="error">
          <MailIcon />
        </Badge>
        <Badge variant="dot" color="warning">
          <MailIcon />
        </Badge>
        <Badge variant="dot" color="error" invisible={true}>
          <MailIcon />
        </Badge>
      </Stack>
    </div>
  );
};

export default MuiBadge;
