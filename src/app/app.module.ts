import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { FilmsComponent } from './components/films/films.component';

@NgModule({
  declarations: [
    AppComponent, MyFirstComponent, FilmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
