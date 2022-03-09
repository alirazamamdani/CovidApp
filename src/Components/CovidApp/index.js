import React, { useState } from "react";
import Navbar from "../Navbar";
import BottomNavigation from "./BottomNav";
import InfoTab from "./Divders";

export const CovidApp = () => {
  const screenconfig = useState(0)
  return (
    <div>
      <Navbar />
      <InfoTab currentScreen={screenconfig[0]}/>
      <BottomNavigation screenconfig={screenconfig} />
    </div>
  );
};
