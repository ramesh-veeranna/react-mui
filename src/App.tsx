import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Grid, ThemeProvider, colors, createTheme } from "@mui/material";

import MuiTypography from "./components/MUI/MuiTypography";
import MuiButton from "./components/MUI/MuiButton";
import MuiTextField from "./components/MUI/MuiTextField";
import MuiSelect from "./components/MUI/MuiSelect";
import MuiRadioButton from "./components/MUI/MuiRadioButton";
import MuiCheckBox from "./components/MUI/MuiCheckBox";
import MuiSwitch from "./components/MUI/MuiSwitch";
import MuiRating from "./components/MUI/MuiRating";
import MuiAutocomplete from "./components/MUI/MuiAutocomplete";
import MuiBox from "./components/MUI/MuiBox";

import MuiStack from "./components/MUI/MuiStack";
import MuiGrid from "./components/MUI/MuiGrid";
import MuiPaper from "./components/MUI/MuiPaper";
import MuiCard from "./components/MUI/MuiCard";
import MuiAccordion from "./components/MUI/MuiAccordion";
import MuiLink from "./components/MUI/MuiLink";
import MuiBreadcrumbs from "./components/MUI/MuiBreadcrumbs";
import MuiDrawer from "./components/MUI/MuiDrawer";
import MuiSpeedDial from "./components/MUI/MuiSpeedDial";
import MuiBottomNavigation from "./components/MUI/MuiBottomNavigation";
import MuiAvatar from "./components/MUI/MuiAvatar";
import MuiBadge from "./components/MUI/MuiBadge";
import MuiList from "./components/MUI/MuiList";
import MuiChip from "./components/MUI/MuiChip";
import MuiTooltip from "./components/MUI/MuiTooltip";
import MuiTable from "./components/MUI/MuiTable";
import MuiAlert from "./components/MUI/MuiAlert";
import MuiSnackbar from "./components/MUI/MuiSnackbar";
import MuiDialog from "./components/MUI/MuiDialog";
import MuiProgress from "./components/MUI/MuiProgress";
import MuiLoadingButton from "./components/MUI/MuiLoadingButton";
import MuiTab from "./components/MUI/MuiTab";
import MuiTimeline from "./components/MUI/MuiTimeline";
import MuiMasonry from "./components/MUI/MuiMasonry";
import MuiResponsive from "./components/MUI/MuiResponsive";
import MuiCustomizeTheme from "./components/MUI/MuiCustomizeTheme";

import {
  AddCircleOutline,
  HomeOutlined,
  MailOutline,
  NotificationAddOutlined,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const myTheme = createTheme({
  palette: {
    secondary: {
      main: colors.teal[500],
    },
  },
});

const customLink = {
  padding: "8px 25px",
  backgroundColor: "#cae5ff",
  display: "block",
};

const leftMenus = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/typoography", title: "Typography" },
  { id: 3, url: "/button", title: "Button" },
  { id: 4, url: "/text-field", title: "Text Field" },
  { id: 5, url: "/select", title: "Select" },
  { id: 6, url: "/radio-button", title: "Radio Button" },
  { id: 7, url: "/check-box", title: "Check Box" },
  { id: 8, url: "/switch", title: "Switch" },
  { id: 9, url: "/rating", title: "Rating" },
  { id: 10, url: "/autocomplete", title: "Autocomplete" },
  { id: 11, url: "/box", title: "Box" },
  { id: 12, url: "/stack", title: "Stack" },
  { id: 13, url: "/grid", title: "Grid" },
  { id: 14, url: "/paper", title: "Paper" },
  { id: 15, url: "/card", title: "Card" },
  { id: 16, url: "/accordion", title: "Accordion" },
  { id: 17, url: "/link", title: "Link" },
  { id: 18, url: "/breadcrumbs", title: "Breadcrumbs" },
  { id: 19, url: "/drawer", title: "Drawer" },
  { id: 20, url: "/speed-dial", title: "Speed Dial" },
  { id: 21, url: "/bottom-navigation", title: "Bottom Navigation" },
  { id: 22, url: "/avatar", title: "Avatar" },
  { id: 23, url: "/badge", title: "Badge" },
  { id: 24, url: "/list", title: "List" },
  { id: 25, url: "/chip", title: "Chip" },
  { id: 26, url: "/tooltip", title: "Tooltip" },
  { id: 27, url: "/table", title: "Table" },
  { id: 28, url: "/alert", title: "Alert" },
  { id: 29, url: "/snackbar", title: "Snackbar" },
  { id: 30, url: "/dialog", title: "Dialog" },
  { id: 31, url: "/progress", title: "Progress" },
  { id: 32, url: "/loading-button", title: "Loading Button" },
  { id: 33, url: "/tabs", title: "Tabs" },
  { id: 34, url: "/timeline", title: "Timeline" },
  { id: 35, url: "/masonry", title: "Masonry" },
  { id: 36, url: "/responsive", title: "Responsive" },
  { id: 37, url: "/customize-theme", title: "Customize Theme" },
];

function App() {
  return (
    <Router>
      <ThemeProvider theme={myTheme}>
        <Navbar title="React" />
        <Grid container sx={{ marginTop: "40px" }}>
          <Grid
            item
            xs={3}
            pt={4}
            sx={{
              overflowY: "scroll",
              maxHeight: "97vh",
            }}
          >
            <List>
              {leftMenus &&
                leftMenus.map((item, index) => (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Link to={item.url}>{item.title}</Link>
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Grid>
          <Grid
            item
            xs={9}
            p={4}
            sx={{ borderLeft: "1px solid #ddd", marginTop: "50px" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/typography" element={<MuiTypography />} />
              <Route path="/button" element={<MuiButton />} />
              <Route path="/text-field" element={<MuiTextField />} />
              <Route path="/select" element={<MuiSelect />} />
              <Route path="/radio-button" element={<MuiRadioButton />} />
              <Route path="/check-box" element={<MuiCheckBox />} />
              <Route path="/switch" element={<MuiSwitch />} />
              <Route path="/rating" element={<MuiRating />} />
              <Route path="/autocomplete" element={<MuiAutocomplete />} />
              <Route path="/box" element={<MuiBox />} />
              <Route path="/stack" element={<MuiStack />} />
              <Route path="/grid" element={<MuiGrid />} />
              <Route path="/paper" element={<MuiPaper />} />
              <Route path="/card" element={<MuiCard />} />
              <Route path="/accordion" element={<MuiAccordion />} />
              <Route path="/link" element={<MuiLink />} />
              <Route path="/breadcrumbs" element={<MuiBreadcrumbs />} />
              <Route path="/drawer" element={<MuiDrawer />} />
              <Route path="/speed-dial" element={<MuiSpeedDial />} />
              <Route
                path="/bottom-navigation"
                element={<MuiBottomNavigation />}
              />
              <Route path="/avatar" element={<MuiAvatar />} />
              <Route path="/badge" element={<MuiBadge />} />
              <Route path="/list" element={<MuiList />} />
              <Route path="/chip" element={<MuiChip />} />
              <Route path="/tooltip" element={<MuiTooltip />} />
              <Route path="/table" element={<MuiTable />} />
              <Route path="/alert" element={<MuiAlert />} />
              <Route path="/snackbar" element={<MuiSnackbar />} />
              <Route path="/dialog" element={<MuiDialog />} />
              <Route path="/progress" element={<MuiProgress />} />
              <Route path="/loading-button" element={<MuiLoadingButton />} />
              <Route path="/tabs" element={<MuiTab />} />
              <Route path="/timeline" element={<MuiTimeline />} />
              <Route path="/masonry" element={<MuiMasonry />} />
              <Route path="/responsive" element={<MuiResponsive />} />
              <Route path="/masonry" element={<MuiMasonry />} />
              <Route path="/customize-theme" element={<MuiCustomizeTheme />} />
            </Routes>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
