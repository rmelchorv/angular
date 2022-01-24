import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Config } from 'src/global-config';
import { Film  } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  providers : [FilmsService],
  templateUrl : './films.component.html',
  selector : 'app-films',
  styleUrls : ['./films.component.css']
})
export class FilmsComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  //#region Attributes

  public colorName : string
  public config = Config;
  public films : Array<Film>;
  public genres : Array<string>;
  public genreName : string;
  public showFilms : boolean;

  //#endregion Attributes

  //#region Constructor

  constructor(
    private filmsService : FilmsService,
    private route : ActivatedRoute,
    private router : Router
  ) {
    this.colorName = this.config.color;
    this.films = this.filmsService.getFilms();
    /*
    this.films = [
      new Film("Dora and the Lost City of Gold","Adventure",2019,"James Bobin",1,"EE.UU.",100),
      new Film("Jeepers Creepers","Terror",2001,"Victor Salva",1,"EE.UU.",250),
      new Film("Revolver","Crime",2005,"Guy Ritchie",1,"U.K.",250),
      new Film("Child's Play","Terror",1988,"Tom Holland",0,"EE.UU.",500)
    ];
    */
    this.genres = [];
    this.genreName = "New genre";

    this.route.params.subscribe((params : Params) => {
      console.log(params["lang"]);
      console.log(params["duration"]);

      if(params["lang"] == "HOME")
        this.router.navigate(["/home"]);
    });

    this.showFilms = true;
  }

  //#endregion Constructor

  //#region Hooks

  ngOnChanges(changes : SimpleChanges) {
    console.log("OnChanges executed!");
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getGenres()
    },1000);
    console.log("OnInit executed!");
  }

  ngDoCheck() {
    /*
    console.log("DoCheck executed!");
    console.log(this.colorName);
    console.log(this.genreName);
    */
  }

  ngOnDestroy() {
    console.log("OnDestroy executed!");
  }

  //#endregion Hooks

  //#region Events

  onAdd() {
    this.addGenre(this.genreName);
  }

  onBlur() {
    console.log("OnBlur executed!");
  }

  onChange() {
    this.changeColor();
  }

  onDel(index : number) {
    this.genres.splice(index, 1);
  }

  onEnter(array? : Array<string>) {
    if (array !== undefined)
      this.addGenre(this.genreName);
    else
      this.changeColor();
  }

  onFocus() {
    console.log("OnFocus executed!");
  }

  onGoHome() {
    this.router.navigate(["/home"]);
  }

  //#endregion Events

  //#region Methods

  addGenre(genre : string) {
    if(this.genres.indexOf(genre)<0)
        this.genres.push(genre);
  }

  changeColor() {
    this.config.color = this.colorName;
  }

  getGenres() {
    this.films.forEach((film) => {
      this.addGenre(film.genre)
    });
  }

  //#endregion Methods
}
