import { Component, OnInit } from '@angular/core';
import { Film  } from 'src/app/models/films';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  public films : Array<Film>;

  constructor() { 
    this.films = [
      new Film("Dora","Animation",2000,"James Bobby"),
      new Film("Jeepers Creepers","Terror",2001,"Victor Salva"),
      new Film("Revolver","Crimen",2005,"Unkown")
    ];
  }

  ngOnInit(): void {
  }

}
