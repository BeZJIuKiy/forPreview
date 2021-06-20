import React from "react"
import {Header} from "./Header";
import {MainDrawer} from "./MainDrawer";
import {Notifications} from "./Notification";

export const Main = () => {
    return (
        <div>
            <Header/>
            <MainDrawer/>
            <Notifications/>
        </div>
    )
}