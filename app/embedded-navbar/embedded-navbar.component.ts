import { Component } from '@angular/core';

@Component({
  selector: 'app-embedded-navbar',
  template: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="topnav" id="myTopnav">
    <a routerLink="home">Home</a>
    <a routerLink="add">Add Property</a>
    <a routerLink="remove">Delete Property</a>
    <a routerLink="search">Search Properties</a>
    <a routerLink="about">About</a>
    <a routerLink="help">Help</a>
    <a routerLink="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>`,
  styleUrls: ['./embedded-navbar.component.css']
})
export class EmbeddedNavbarComponent {

}
