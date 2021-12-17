export class Film {
    public tittle : string;
    public genre : string;
    public year: number;
    public director : string;

    constructor(tittle : string, genre : string, year : number, director : string) {
        this.tittle = tittle;
        this.genre = genre;
        this.year = year;
        this.director = director;
    }
}
