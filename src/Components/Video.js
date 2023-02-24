import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
export default function Usingvideo() {
  return (
    <Card sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <CardContent>
        <ListItem
          secondaryAction={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        >
          <ListItemText secondary="Product Video" />
        </ListItem>
      </CardContent>

      <CardMedia>
        <CardActionArea>
          <iframe
            src="https://www.youtube.com/embed/Oy6hk6Y7VHQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </CardActionArea>
      </CardMedia>
    </Card>
  );
}
