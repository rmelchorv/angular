import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRountingModule, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

import { ErrorComponent } from './components/error/error.component';
import { FilmsComponent } from './components/films/films.component';
import { FirstComponent } from './components/first/first.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent, ErrorComponent, FilmsComponent, FirstComponent, HomeComponent
  ],
  imports: [
    AppRountingModule, BrowserModule, FormsModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
