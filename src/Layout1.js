import "./App.css";
import Graph from "./Components/Graph";
import Donut from "./Components/Donut";
import Grid from "@mui/material/Grid";
import Tabulation from "./Components/Tabulation";
import Profile from "./Components/Profile";
import Video from "./Components/Video";

export default function Layout1() {
  return (
    <div className="grid-container2">
      <Grid lg={12} item container spacing={3}>
        <Grid item lg={4} xs={4}>
          <Graph />
        </Grid>
        <Grid item lg={4} xs={4}>
          <Donut />
        </Grid>
        <Grid item lg={4} xs={4}>
          <Profile />
        </Grid>
        <Grid item lg={8} xs={8}>
          <Tabulation />
        </Grid>
        <Grid item lg={4} xs={4}>
          {" "}
          <Video />
        </Grid>
      </Grid>
    </div>
  );
}
