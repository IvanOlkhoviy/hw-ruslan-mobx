import { action, makeObservable, observable } from "mobx";

class Store {
    users = [
        {id: 0, login: "admin", password: "admin"}
    ];

    isAuthenticated = false;


    setAuthentication(login, password){
        let user = this.users.find(user => user.login === login && user.password === password);
        if(user){
            this.isAuthenticated = true;
        }else{
            alert("Something wrong with login or password")
        }
    }

    setAddedStatus = () => {
        this.isAddedToDB = false;
    }
    

    logOut = () =>{
        this.isAuthenticated = false;
    }


    constructor() {
        makeObservable(this, {
            users: observable,
            isAuthenticated: observable,
            logOut: action,
            setAuthentication: action,
            setAddedStatus: action
        })
    }
    
}

    

export default new Store();