import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Signin } from "./components/Auth/Signin"
import { Signup } from "./components/Auth/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path={"/"} component={Main} />
        <Route path={"/signin"} component={Signin} />
        <Route path={"/signup"} component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
