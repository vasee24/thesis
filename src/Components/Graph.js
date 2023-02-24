import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Usinggraph() {
  return (
    <div className="graph">
      <Card>
        <Typography variant="body2" color="textSecondary" component="p">
          Statistics
        </Typography>

        <CardMedia
          sx={{ height: 250 }}
          component="img"
          image={require("../images/grap.jpg")}
        />
      </Card>
    </div>
  );
}
