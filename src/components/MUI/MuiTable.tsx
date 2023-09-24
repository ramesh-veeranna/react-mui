import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const userData = [
  {
    id: 1,
    first_name: "Christin",
    last_name: "Sesser",
    email: "csesser0@bbc.co.uk",
    gender: "Bigender",
    ip_address: "238.98.190.229",
    app_name: "Alpha",
    phone: "808-827-3235",
  },
  {
    id: 2,
    first_name: "Wiatt",
    last_name: "Koeppke",
    email: "wkoeppke1@auda.org.au",
    gender: "Male",
    ip_address: "94.188.116.143",
    app_name: "Transcof",
    phone: "800-161-5514",
  },
  {
    id: 3,
    first_name: "Jaime",
    last_name: "Yaakov",
    email: "jyaakov2@theatlantic.com",
    gender: "Male",
    ip_address: "112.0.243.164",
    app_name: "Fintone",
    phone: "319-448-6876",
  },
  {
    id: 4,
    first_name: "Lorene",
    last_name: "Portlock",
    email: "lportlock3@dyndns.org",
    gender: "Female",
    ip_address: "59.13.116.20",
    app_name: "Lotlux",
    phone: "851-884-9761",
  },
  {
    id: 5,
    first_name: "Arline",
    last_name: "Aiers",
    email: "aaiers4@liveinternet.ru",
    gender: "Female",
    ip_address: "130.238.76.14",
    app_name: "Tres-Zap",
    phone: "197-753-8169",
  },
  {
    id: 6,
    first_name: "Ilise",
    last_name: "Casserly",
    email: "icasserly5@bbb.org",
    gender: "Female",
    ip_address: "173.219.105.52",
    app_name: "Tampflex",
    phone: "470-228-8033",
  },
  {
    id: 7,
    first_name: "Bernelle",
    last_name: "Thorowgood",
    email: "bthorowgood6@zdnet.com",
    gender: "Female",
    ip_address: "160.33.66.106",
    app_name: "Alpha",
    phone: "419-823-9633",
  },
  {
    id: 8,
    first_name: "Chevalier",
    last_name: "McClymond",
    email: "cmcclymond7@dedecms.com",
    gender: "Male",
    ip_address: "203.245.112.36",
    app_name: "Temp",
    phone: "873-268-1329",
  },
  {
    id: 9,
    first_name: "Kelcie",
    last_name: "Dalston",
    email: "kdalston8@ucoz.com",
    gender: "Female",
    ip_address: "7.161.162.192",
    app_name: "Matsoft",
    phone: "826-528-1418",
  },
  {
    id: 10,
    first_name: "Roby",
    last_name: "Davidovitz",
    email: "rdavidovitz9@webs.com",
    gender: "Female",
    ip_address: "148.149.40.123",
    app_name: "Zaam-Dox",
    phone: "149-603-6586",
  },
];

const MuiTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple data table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.ip_address}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <IconButton sx={{ padding: 0 }}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MuiTable;
