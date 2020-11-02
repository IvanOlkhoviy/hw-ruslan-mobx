import React, { useState } from 'react';

import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom';

function SignIn(props) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    let isAuth = props.Store.isAuthenticated

    return (
        <div className="signInContainer mt-4">
            <h2>Log in</h2>
            <div className="form-group">
                {
                    isAuth ? (<Redirect to="/secretpage"></Redirect>) : null
                }
                <label>Login</label>
                <input className="form-control col-5  ml-auto mr-auto"
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}>
                </input>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control col-5 ml-auto mr-auto"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}>
                </input>
            </div>

            <button className="btn btn-dark" onClick={() => {
                props.Store.setAuthentication(login, password)
            }}>
                Log in
            </button>
        </div>
    )
}

export default inject("Store")(observer(SignIn));