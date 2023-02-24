import React, { Component } from "react";
import Chart from "react-google-charts";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

const pieData = [
  ["", ""],
  ["France", 4260],
  ["Italy", 3970],
  ["Japan", 4260],
  ["Canada", 3970],
];
const pieOptions = {
  pieHole: 0.5,
};
class PieChart extends Component {
  render() {
    return (
      <div>
        <Card sx={{ maxWidth: 400, maxHeight: 320 }}>
          <Typography variant="body2" color="textSecondary" component="p">
            Sales distribution
          </Typography>
          <Chart
            width={"400px"}
            height={"250px"}
            chartType="PieChart"
            data={pieData}
            options={pieOptions}
          />
        </Card>

        <Typography>
          <ListItemText primary="Total" secondary="230,900 sales" />
        </Typography>
      </div>
    );
  }
}
export default PieChart;
