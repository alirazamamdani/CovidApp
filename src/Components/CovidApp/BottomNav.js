import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    left: 0,
    // bottom: 0,
    right: 0,
  },
});

export default function BottomNav({screenconfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenconfig[0]}
      onChange={(event, newValue) => {
        console.log(newValue);
        screenconfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global State" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country State" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graph" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
