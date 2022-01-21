export class Film {
  /*
    public tittle : string;
    public genre : string;
    public year: number;
    public director : string;
    public clasification : number;
    public country : string;
    public price : number;

  constructor(
    tittle : string,
    genre : string,
    year : number,
    director : string,
    clasification : number,
    country : string,
    price : number
  ) {
      this.tittle = tittle;
      this.genre = genre;
      this.year = year;
      this.director = director;
      this.clasification = clasification;
      this.country = country;
      this.price = price;
  }
    */

  constructor(
    public tittle: string,
    public genre: string,
    public year: number,
    public director: string,
    public clasification: number,
    public country: string,
    public price: number
  ) {}
}
