import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight : "100vh",
    backgroundColor: "lightBlue",
  },
  paper: {
    height: 500,
    width: 400,
    margin: "0 auto",
    textAlign: "center",
  },
  input: {
    width: "90%",
    margin: 10,
  },
  btn: {
    marginTop: 20,
    width: "40%",
  },
  form: {
    backgroundColor: "#fff",
  },
  loader : {
      marginTop: "20px"
  }
}));
function LoginCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={7} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField label="Enter  Email" className={classes.input} />
          <TextField label="Enter  Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.btn}>
            Submit
          </Button>
 
        </form>
        <CircularProgress className={classes.loader}/>
      </Paper>
    </div>
  );
}

export default LoginCard;
