import React from 'react';
import { Link, BrowserRouter, Route, Redirect, useHistory } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Signup from '../SignUp/SignUp';
import "./NavbarStyle.css"


function Navbar() {

    const history = useHistory();
    

    return (
        <BrowserRouter>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link home" to = "/"><u>Home</u></Link>
                    <button onClick = {() => history.push("/signup")}>Check</button>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to = "/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to = "/signin">Sign in</Link>
                </li>
            </ul>
            <Route exact path = "/"><h1>Home page</h1></Route>
            <Route exact path = "/signup" component = {Signup} />
            <Route exact path = "/signin" component = {SignIn} />
        </BrowserRouter>

    )
}

export default Navbar;
