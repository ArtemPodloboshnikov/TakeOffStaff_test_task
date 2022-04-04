import { makeAutoObservable } from "mobx";
import { Errors } from "../constants/authorization";

class Authorization
{
    name: string = '';
    password: string = '';
    isEnter: boolean = false;
    private users = [{name: '', password: ''}];

    constructor()
    {
        makeAutoObservable(this);
    }

    setPassword(password: string)
    {
        this.password = password
    }

    setName(name: string)
    {
        this.name = name;
    }

    async goToPage(callback: ()=>any)
    {
        await this.getUsers();
        let isLoginTruth = false;
        this.users.forEach(user=>{
            
            console.log(`username: ${user.name} password: ${user.password}`);
            if (this.name == user.name)
            {
                isLoginTruth = true;
                if (this.password == user.password)
                {
                    this.isEnter = true;
                    callback();
                }
                else
                {
                    alert(Errors.BAD_PASSWORD);
                }
            }
            
        })
        if (!isLoginTruth)
            alert(Errors.BAD_LOGIN);
    }

    private async getUsers()
    {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        //@ts-ignore
        users = users.map(user=>{return {name: user.username, password: user.username}})
        this.users = users;
       
    }

}

export default new Authorization();