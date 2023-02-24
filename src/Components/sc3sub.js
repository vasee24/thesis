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
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Switch from "@mui/material/Switch";

export default function Notify() {
  const [anchorElUser, setAnchorElUser] = React.useState(true);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const settings = [
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Bavid kames"
            src={require("/reactjs/thesis/Assignment_Project/src/images/harry.jpg")}
          />
        </ListItemAvatar>
        <ListItemText
          primary="Bavid kames"
          secondary="assigned u on the calls with sara"
        />
        <ListItemText edge="end" secondary="2mins ago" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Alexa mary"
            src={require("/reactjs/thesis/Assignment_Project/src/images/heist.jpg")}
          />
        </ListItemAvatar>
        <ListItemText
          primary="Alexa mary"
          secondary="Marked the task New Ui as done"
        />
        <ListItemText edge="end" secondary="5mins ago" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Eva maria"
            src={require("/reactjs/thesis/Assignment_Project/src/images/sparrow.jpeg")}
          />
        </ListItemAvatar>
        <ListItemText
          primary="Eva maria"
          secondary="Added a comment on sales task"
        />
        <ListItemText edge="end" secondary="7mins ago" />
      </ListItem>
      <Divider />
      <Link> show more</Link>
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
          <Box sx={{ color: "gold" }}>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent=" "
              variant="dot"
              invisible={invisible}
            >
              <NotificationsSharpIcon
                onClick={handleBadgeVisibility}
                control={<Switch checked={!invisible} />}
              />
            </Badge>
          </Box>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
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
