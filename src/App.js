import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import {Main} from "./components/Main/Main";
import {Signin} from "./components/Auth/Signin"
import {Signup} from "./components/Auth/Signup";
import {Charts} from "./components/Main/Charts";
import {Prediction} from "./components/Main/Prediction/Prediction";
import {AudioSensor} from "./components/Main/AudioSensor/AudioSensor";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Route path={"/signin"} component={Signin}/>
                <Route path={"/signup"} component={Signup}/>

                <Route exact path={"/"} component={Main}/>
                <Route exact path={"/charts"} component={Charts}/>
                <Route exact path={"/prediction"} component={Prediction}/>
                <Route exact path={"/audio"} component={AudioSensor}/>

            </BrowserRouter>
        </div>
    );
}

export default App;
