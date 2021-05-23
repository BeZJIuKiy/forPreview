import React from "react"
import {Header} from "./Header";
import {MainDrawer} from "./MainDrawer";
import {YaMap} from "./YaMap";
import ListItemText from "@material-ui/core/ListItemText";
import {Graph} from "./Graph";

export const Charts = () => {
    return (
        <div>
            <Header/>
            {/*<MainDrawer/>*/}
            <div style={{marginTop: 20}}><Graph /></div>
            <div
                style={{
                    textAlign: "left",
                    fontFamily: 'Roboto, sans-serif',
                    marginTop: 20,
                    // fontSize: 32, для заголовка
                    fontSize: 24,
                    margin: 0,
                    padding: 0
                }}
            >
                Predicate state of the Engine
                <div>Predicate state of the engine during current operation</div>
                <div>and what needs to be done to minimize the consequences.</div>
                <div style={{display: "flex"}}>
                    <div>
                        <div>Mass flow sensor:</div>
                        <div>Throttle position sensor:</div>
                        <div>Coolant temperature sensor:</div>
                        <div>Knock sensor:</div>
                        <div>Oxygen sensor:</div>
                        <div>Crankshaft position sensor:</div>
                        <div>Speed sensor:</div>
                        <div>Camshaft position sensor:</div>
                    </div>

                    <div style={{marginLeft: 10}}>
                        <div>Current Data</div>
                        <div>Current Data</div>
                        <div>Current Data</div>
                        <div>Current Data</div>
                        <div>Current Data</div>
                        <div>Current Data</div>
                        <div>Current Data</div>
                        <div>Current Data</div>
                    </div>
                </div>
            </div>
            {/*<YaMap/>*/}
        </div>
    )
}