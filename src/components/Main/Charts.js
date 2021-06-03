import React from "react"
import {Header} from "./Header";
import {MainDrawer} from "./MainDrawer";
import ListItemText from "@material-ui/core/ListItemText";
import {Graph} from "./Graph";
import {NewTabs} from "./Tabs";

export const Charts = () => {
    return (
        <div>
            <Header/>
            <MainDrawer/>
            <NewTabs />
            {/*<Graph />*/}
        </div>
    )
}