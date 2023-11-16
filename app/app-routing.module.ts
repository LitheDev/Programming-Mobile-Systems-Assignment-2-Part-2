import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
// import {HelpPageComponent} from "./help-page/help-page.component";
// import {AddPropertyComponent} from "./add-property/add-property.component";
// import {RemovePropertyComponent} from "./remove-property/remove-property.component";
import {SearchPropertiesComponent} from "./search-properties/search-properties.component";
// import {AboutPageComponent} from "./about-page/about-page.component";

const routes: Routes = [
  // {path: 'remove', component: RemovePropertyComponent},
  {path: 'search', component: SearchPropertiesComponent},
  // {path: 'add', component: AddPropertyComponent},
  // {path: 'about', component: AboutPageComponent},
  // {path: 'help', component: HelpPageComponent},
  // {path: 'home', component: HelpPageComponent},
  {path: '', redirectTo :"/home", pathMatch: 'full'}, // Redirects to home if nothing is entered
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
