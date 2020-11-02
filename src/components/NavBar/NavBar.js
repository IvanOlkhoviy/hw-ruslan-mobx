import { observer, inject } from 'mobx-react';
import React from 'react';
import { Link,  Route } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Signup from '../SignUp/SignUp';
import "./NavbarStyle.css"
import PrivateRoute from "../PrivateRouter/PrivateRouter"
import Secretpage from '../SecretPage/SecretPage';


function Navbar(props) {

    return (
        <>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link home" to="/">Home</Link>
                </li>
                {
                !props.Store.isAuthenticated ? <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li> : null
                }
                {
                !props.Store.isAuthenticated ? <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign in</Link>
                </li> : null
                }
                
                { props.Store.isAuthenticated ? <li className="nav-item pt-1">
                    <button className = "btn btn-outline-warning" onClick = { () => props.Store.logOut()}>Sign out</button>
                </li> : null 
                }
                { props.Store.isAuthenticated ? <li className="nav-item">
                    <Link className="nav-link" to="/secretpage">Secret page</Link>
                </li> : null 
                }
            </ul>
            <Route exact path="/"><h1>Home page</h1></Route>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={SignIn} />
            <PrivateRoute path = '/secretpage' component = {Secretpage}/>
        </>
    )
}

export default inject("Store")(observer(Navbar));
