import "./App.css";
import React from "react";
import {Provider} from "mobx-react";
import {Redirect, Link, Route, Switch, BrowserRouter} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Signup from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Navbar/>

      
    </div>
  );
}

export default App;
