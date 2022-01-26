import { ActivatedRoute, Router } from '@angular/router';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Config } from 'src/global-config';
import { Film  } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  providers : [FilmService],
  selector : 'app-films',
  styleUrls : ['./films.component.css'],
  templateUrl : './films.component.html'
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
    private activatedRoute : ActivatedRoute,
    private filmService : FilmService,
    private router : Router
  ) {
    this.colorName = this.config.color;
    this.films = this.filmService.getFilms();
    this.genres = [];
    this.genreName = "";

    this.activatedRoute.params.subscribe((params) => {
      if (params["lang"] !== undefined) {
        console.log(params["lang"]);

        if(params["lang"] == "HOME")
          this.router.navigate(["/home"]);
      } 
      if (params["duration"] !== undefined)
        console.log(params["duration"]);
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
