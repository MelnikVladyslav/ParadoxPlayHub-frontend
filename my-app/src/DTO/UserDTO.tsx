class UserDTO{
    firstName:string;
    email:string;
    password:string;

    constructor(firstName:string, email:string, password:string)
    {
        this.firstName = firstName;
        this.email = email;
        this.password = password;
    }
}