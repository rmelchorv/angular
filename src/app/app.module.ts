import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FirstComponent } from './components/first/first.component';

@NgModule({
  declarations: [
    AppComponent, FilmsComponent, FirstComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
