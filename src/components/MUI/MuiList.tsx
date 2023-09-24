import {
  AddCircleOutline,
  MailOutline,
  NotificationAddOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const MuiList = () => {
  return (
    <>
      <Typography variant="h6">Default List Items</Typography>
      <Box
        sx={{
          width: "400px",
          bgcolor: "#efefef",
          marginBottom: 4,
        }}
      >
        <List>
          <ListItem>
            <ListItemText primary="List Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="List Item 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="List Item 3" />
          </ListItem>
        </List>
      </Box>
      <Typography variant="h6">List Items With Icon</Typography>
      <Box
        sx={{
          width: "400px",
          bgcolor: "#efefef",
          marginBottom: 4,
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <MailOutline />
            </ListItemIcon>
            <ListItemText primary="List Item 1" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AddCircleOutline />
            </ListItemIcon>
            <ListItemText primary="List Item 2" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <NotificationAddOutlined />
            </ListItemIcon>
            <ListItemText primary="List Item 3" />
          </ListItem>
        </List>
      </Box>
      <Typography variant="h6">List Items With Icon & Button</Typography>
      <Box
        sx={{
          width: "400px",
          bgcolor: "#efefef",
          marginBottom: 4,
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <ListItemText primary="List Item 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText primary="List Item 2" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationAddOutlined />
              </ListItemIcon>
              <ListItemText primary="List Item 3" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Typography variant="h6">
        List Items With Icon & Button also Divider
      </Typography>
      <Box
        sx={{
          width: "400px",
          bgcolor: "#efefef",
          marginBottom: 4,
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <ListItemText primary="List Item 1" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText primary="List Item 2" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationAddOutlined />
              </ListItemIcon>
              <ListItemText primary="List Item 3" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Typography variant="h6">
        List Items With Avatar Icon & secondary text{" "}
      </Typography>
      <Box
        sx={{
          width: "400px",
          bgcolor: "#efefef",
          marginBottom: 4,
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.dark" }}>
                  <MailOutline />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 1" secondary="Secondary Text" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "warning.dark" }}>
                  <AddCircleOutline />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 2" secondary="Secondary Text" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "success.dark" }}>
                  <NotificationAddOutlined />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 3" secondary="Secondary Text" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default MuiList;
