import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Divider } from "@mui/material";
import Link from "@mui/material/Link";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, Location, Views, Sales, Conversion, Total) {
  return { name, Location, Views, Sales, Conversion, Total };
}

const rows = [
  createData("google.com", 3746, 752, "43%", "$19,291"),
  createData("facebook.com", 8126, 728, "32%", "$17,638"),
  createData("twitter.com", 8836, 694, "28%", "$16,218"),
  createData("Direct,email,IM", 1173, 645, "24%", "$14,421"),
  createData("Linkedin.com", 2739, 539, "20%", "$12,370"),
  createData("instagram.com", 2739, 539, "20%", "$12,370"),
];

export default function CustomizedTables() {
  return (
    <Card>
      <TableContainer component={Paper} sx={{ maxWidth: 800, maxHeight: 500 }}>
        <Typography variant="body2" color="textSecondary" component="p">
          Referrer
        </Typography>
        <br />
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead sx={{ maxWidth: 600 }}>
            <TableRow>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell align="right">Views</StyledTableCell>
              <StyledTableCell align="right">Sales</StyledTableCell>
              <StyledTableCell align="right">Conversion</StyledTableCell>
              <StyledTableCell align="right">Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Location}</StyledTableCell>
                <StyledTableCell align="right">{row.Views}</StyledTableCell>
                <StyledTableCell align="right">{row.Sales}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.Conversion}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Divider />
        <Link> show more</Link>
      </TableContainer>
    </Card>
  );
}
