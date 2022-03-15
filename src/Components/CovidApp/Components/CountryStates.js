import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CountryRecords from './CountryData'
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "20px 10px",
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: 600,
    fontFamily: "Poppins",
  },
  title: {
    Color: "#ccc",
  },
}));
export const CountryStates = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.covid19api.com/summary");
      let data = await response.json();
      console.log(data.Countries);
    
      setData(data.Countries)
      console.log(data)
    }
    getData();
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        
         <CountryRecords countrydata={data}/>
 
      </Grid>
    </div>
  );
};
