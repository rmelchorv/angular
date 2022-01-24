import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRountingModule, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

import { ErrorComponent } from './components/error/error.component';
import { FilmsComponent } from './components/films/films.component';
import { FirstComponent } from './components/first/first.component';
import { HomeComponent } from './components/home/home.component';
import { ExternalComponent } from './components/external/external.component';

@NgModule({
  declarations: [
    AppComponent, ErrorComponent, FilmsComponent, FirstComponent, HomeComponent, ExternalComponent
  ],
  imports: [
    AppRountingModule, BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
