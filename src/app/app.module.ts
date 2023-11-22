import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PropertyListComponent} from './property-list/property-list.component';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from './home/home.component';
import {HelpPageComponent} from './help-page/help-page.component';
import {AddPropertyComponent} from './add-property/add-property.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {EmbeddedNavbarComponent} from "./embedded-navbar/embedded-navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    EmbeddedNavbarComponent,
    PageNotFoundComponent,
    PropertyListComponent,
    HomeComponent,
    HelpPageComponent,
    AddPropertyComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
