import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
  },
  title : {
    Color: "#ccc"
  }
}));

export default function GlobalState() {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.covid19api.com/summary"
      );
      let data = await response.json();
      console.log(data);
      delete data.Global.Date  
      setData(data.Global);
      console.log(data.Global);
    }
    getData();
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {Object.keys(data).map((name, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Paper className={classes.paper} elevation={5}>
              <h3 className={classes.title}>{name.toUpperCase()}</h3>
              <p>{data[name]}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
