import React from 'react';



function SignIn() {
    

    return (
    <div className = "signInContainer mt-4">
        <h2>Log in</h2>
        <div className="form-group">
            <label>Login</label>
            <input  className="form-control col-5  ml-auto mr-auto"></input>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control col-5 ml-auto mr-auto"></input>
        </div>
        <button className="btn btn-dark">Log in</button>
    </div>
    )
}

export default SignIn;