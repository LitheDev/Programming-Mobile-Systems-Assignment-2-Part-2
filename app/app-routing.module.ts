import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {HelpPageComponent} from "./help-page/help-page.component";
import {PropertyListComponent} from "./property-list/property-list.component";
import {AddPropertyComponent} from "./add-property/add-property.component";
import {AboutUsComponent} from "./about-us/about-us.component";


const routes: Routes = [
  {path: 'add', component: AddPropertyComponent},     // Add route
  {path: 'list', component: PropertyListComponent},   // List route
  {path: 'help', component: HelpPageComponent},       // Help route
  {path: 'home', component: HomeComponent},           // Home route
  {path: 'about-us', component: AboutUsComponent},    // About us route
  {path: '', redirectTo :"/home", pathMatch: 'full'}, // Redirects to home if nothing is entered
  {path: '**', component: PageNotFoundComponent}      // Redirects to page not found if invalid url is entered

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
