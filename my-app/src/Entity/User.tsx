class User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    roleId: string;
    token: string;
    url: string;

    constructor(id: number, firstName:string, lastName:string, roleId:string, token:string, url:string, email:string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.token = token;
        this.url = url;
        this.email = email;
      }
}