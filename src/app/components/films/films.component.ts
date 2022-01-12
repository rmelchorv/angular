import { Component, OnInit } from '@angular/core';
import { Film  } from 'src/app/models/films';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  public films : Array<Film>;
  public genres : Array<string>;
  public showFilms : boolean;

  constructor() { 
    this.films = [
      new Film("Dora and the Lost City of Gold","Adventure",2019,"James Bobin",1,"EE.UU."),
      new Film("Jeepers Creepers","Terror",2001,"Victor Salva",1,"EE.UU."),
      new Film("Revolver","Crime",2005,"Guy Ritchie",1,"U.K."),
      new Film("Child's Play","Terror",1988,"Tom Holland",0,"EE.UU.")
    ];
    this.genres = [];
    this.showFilms = true;
  }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.films.forEach((film) => {
      if(this.genres.indexOf(film.genre)<0)
        this.genres.push(film.genre);
    });
  }

}
