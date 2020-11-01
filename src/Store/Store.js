import { action, computed, makeObservable, observable } from "mobx";

class Store {
    users = [
        {id: 0, login: "admin", password: "admin"}
    ];

    // constructor() {
    //     makeObservable(this, {
    //         users: observable,
    //         createNewUser: action,
    //     })
    // }
    


    createNewUser = ( login, password) =>{
        let newId = this.users.length;
        this.users.push({id: newId++, login, password});
        console.log(this.users)
    }

}

    

export default  new Store();