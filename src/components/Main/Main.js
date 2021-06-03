import React from "react"
import {Header} from "./Header";
import {MainDrawer} from "./MainDrawer";
import {NewTabs_02} from "./Prediction/Tabs_02";

export const Main = () => {
    return (
        <div>
            <Header/>
            <MainDrawer/>
            <NewTabs_02 />
        </div>
    )
}