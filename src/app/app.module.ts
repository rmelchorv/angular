import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FirstComponent } from './components/first/first.component';

@NgModule({
  declarations: [
    AppComponent, FilmsComponent, FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
