import { Check as CheckIcon } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";

const MuiAlert = () => {
  return (
    <div>
      <Stack spacing={2}>
        <Alert severity="info">This is an primary alert</Alert>
        <Alert severity="success">This is an primary alert</Alert>
        <Alert severity="warning">This is an primary alert</Alert>
        <Alert severity="error">This is an primary alert</Alert>

        <Alert variant="outlined" severity="info">
          This is an primary alert
        </Alert>
        <Alert variant="outlined" severity="success">
          This is an primary alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an primary alert
        </Alert>
        <Alert variant="outlined" severity="error">
          This is an primary alert
        </Alert>

        <Alert variant="filled" severity="info">
          This is an primary alert
        </Alert>
        <Alert variant="filled" severity="success">
          This is an primary alert
        </Alert>
        <Alert variant="filled" severity="warning">
          This is an primary alert
        </Alert>
        <Alert variant="filled" severity="error">
          This is an primary alert
        </Alert>

        <Alert
          variant="filled"
          severity="info"
          icon={<CheckIcon fontSize="inherit" />}
          onClose={() => alert("Close alert!")}
        >
          <AlertTitle>Info</AlertTitle>
          This is an primary alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          action={
            <Button color="inherit" size="small">
              Undo
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          This is an primary alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is an primary alert
        </Alert>
        <Alert variant="filled" severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an primary alert
        </Alert>
      </Stack>
    </div>
  );
};

export default MuiAlert;
