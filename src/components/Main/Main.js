import React from "react"
import {Header} from "./Header";
import {MainDrawer} from "./MainDrawer";
import {YaMap} from "./YaMap";

export const Main = () => {
    return (
        <div>
            <Header/>
            <MainDrawer/>
            <YaMap/>
        </div>
    )
}