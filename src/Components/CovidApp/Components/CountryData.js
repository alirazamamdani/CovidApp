import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    margin: "20px 0",
    maxWidth: "100%",
  },
  box: {
    marginTop: "10px",
  },
});

export default function CountriesData({ countrydata }) {
  console.log(countrydata);

  const classes = useStyles();
  return (
    <div className={classes.box}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>New Confirmed</StyledTableCell>
              <StyledTableCell>Total Confirmed</StyledTableCell>
              <StyledTableCell>New Deaths</StyledTableCell>
              <StyledTableCell>Total Deaths</StyledTableCell>
              <StyledTableCell>New Recovered</StyledTableCell>
              <StyledTableCell>Total Recovered</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {Object.values(countrydata).map((value, index) => {
              return (
                <>
                  <StyledTableRow key={index}>
                    <TableCell>{value.Country}</TableCell>
                    <TableCell>{value.NewConfirmed}</TableCell>
                    <TableCell>{value.TotalConfirmed}</TableCell>
                    <TableCell>{value.NewDeaths}</TableCell>
                    <TableCell>{value.TotalDeaths}</TableCell>
                    <TableCell>{value.NewRecovered}</TableCell>
                    <TableCell>{value.TotalRecovered}</TableCell>
                  </StyledTableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
