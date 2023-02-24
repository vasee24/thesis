import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

import { LinkedIn, Instagram, Facebook } from "@mui/icons-material";

export default function InsetDividers() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        center: 50,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <Card sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          alt="Remy Sharp"
          src={require("/reactjs/thesis/Assignment_Project/src/images/vaseeharan.jpg")}
        />
      </StyledBadge>

      <Box>
        <Typography
          marginRight={1}
          alignItems="center"
          variant="name"
          component={"h2"}
          color="darkcyan"
        >
          vasee haran
        </Typography>
        <Typography>
          <ListItemText secondary="India" />
        </Typography>
      </Box>
      <Box variant="about1" color="GrayText">
        <LinkedIn />
        <Instagram />
        <Facebook />
      </Box>

      <br />
      <ListItem
        secondaryAction={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      >
        <ListItemText secondary="Our Users" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="drew james"
            src={require("/reactjs/thesis/Assignment_Project/src/images/harry.jpg")}
          />
        </ListItemAvatar>
        <ListItemText primary="Drew james" secondary="united states" />

        <ListItemText secondary="mobile:7338898131" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Bavid kames"
            src={require("/reactjs/thesis/Assignment_Project/src/images/heist.jpg")}
          />
        </ListItemAvatar>
        <ListItemText primary="Bavid kames" secondary="united states" />
        <ListItemText secondary="mobile:9944769471" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Lavid emes"
            src={require("/reactjs/thesis/Assignment_Project/src/images/sparrow.jpeg")}
          />
        </ListItemAvatar>
        <ListItemText primary="Lavid emes" secondary="united states" />
        <ListItemText secondary="mobile:8081317777" />
      </ListItem>
    </Card>
  );
}
