import { Component, OnChanges, OnDestroy, OnInit, DoCheck } from '@angular/core';
import { Config } from 'src/global-config';
import { Film  } from 'src/app/models/films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnChanges, OnInit, OnDestroy, DoCheck {
  public filmName : string;
  public films : Array<Film>;
  public genres : Array<string>;
  public showFilms : boolean;
  public config = Config;

  constructor() {
    this.filmName = "Default value";
    this.films = [
      new Film("Dora and the Lost City of Gold","Adventure",2019,"James Bobin",1,"EE.UU."),
      new Film("Jeepers Creepers","Terror",2001,"Victor Salva",1,"EE.UU."),
      new Film("Revolver","Crime",2005,"Guy Ritchie",1,"U.K."),
      new Film("Child's Play","Terror",1988,"Tom Holland",0,"EE.UU.")
    ];
    this.genres = [];
    this.showFilms = true;
  }

  ngOnChanges() {
    console.log("OnChanges executed!");
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getGenres()
    },1000);
  }

  ngDoCheck() {
    console.log("DoCheck executed!");
  }

  ngOnDestroy() {
    console.log("OnDestroy executed!");
  }

  getGenres() {
    this.films.forEach((film) => {
      if(this.genres.indexOf(film.genre)<0)
        this.genres.push(film.genre);
    });
  }

}
