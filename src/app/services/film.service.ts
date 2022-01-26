import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable()
export class FilmService {
    public films : Array<Film>;

    constructor() {
        this.films = [
            new Film("Dora and the Lost City of Gold","Adventure",2019,"James Bobin",1,"EE.UU.",100),
            new Film("Jeepers Creepers","Terror",2001,"Victor Salva",1,"EE.UU.",250),
            new Film("Revolver","Crime",2005,"Guy Ritchie",1,"U.K.",250),
            new Film("Child's Play","Terror",1988,"Tom Holland",0,"EE.UU.",500)
          ];
    }

    getFilms() : Array<Film> {
        return this.films;
    }
}
