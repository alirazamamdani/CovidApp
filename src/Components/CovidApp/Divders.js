import React from "react";
import GlobalState from '../CovidApp/Components/GlobalState'
import {CountryStates} from './Components/CountryStates'
import { GraphView } from "./Components/GraphView";

export default function InfoTabs({currentScreen}) {
    if(currentScreen === 0)
    return <GlobalState />
    else if(currentScreen === 1)
    return <CountryStates />
    else return <GraphView />
} 


