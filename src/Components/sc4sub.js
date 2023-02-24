import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function User() {
  const [anchorElUser, setAnchorElUser] = React.useState(true);

  const settings = [
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <PersonOutlineOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="My Profile" />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <ReceiptOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Billing" />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <LogoutOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>,
  ];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip>
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="Alexa mary"
            src={require("/reactjs/thesis/Assignment_Project/src/images/vaseeharan.jpg")}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
