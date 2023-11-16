import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmbeddedNavbarComponent } from './embedded-navbar/embedded-navbar.component';

import { SearchPropertiesComponent } from './search-properties/search-properties.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyListComponent } from './property-list/property-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmbeddedNavbarComponent,
    SearchPropertiesComponent,
    PageNotFoundComponent,
    PropertyListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
