import { inject, observer } from 'mobx-react';
import {React, useState } from 'react';
import { useHistory} from "react-router-dom";



function Signup(props) {

    const history =  useHistory();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSetLogin = value => {
        setLogin(value);
    } 
    const handleSetPassword = value => {
        setPassword(value);
    }

    const handleSubmit = () =>{
        if(login !== "" && password !== ""){
            let newId = props.Store.users.length;
            props.Store.users.push({id: newId++, login, password});
            alert("User has beenn created successfuly!")
        history.push("/");
    }
}



    return (
    <div className = "signUpContainer mt-4">
        <h2>Register:</h2>
        <div className = "form-group">
            <label>Login</label>
            <input  className = "form-control col-5  ml-auto mr-auto"
            placeholder = "Enter your login:"
            onChange = { (event) => handleSetLogin(event.target.value) }>
            </input>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type = "password" className = "form-control col-5 ml-auto mr-auto"
            placeholder = "Enter your password:"
            onChange = { (event) => handleSetPassword(event.target.value) }></input>
        </div>
        <button className="btn btn-dark" onClick = {() => handleSubmit() }>Register</button>
    </div>
    )
}

export default inject("Store")(observer(Signup));