class LibraryDTO{
    email:string;
    games:Game;

    constructor(email:string, games:Game)
    {
        this.email = email;
        this.games = games;
    }
}