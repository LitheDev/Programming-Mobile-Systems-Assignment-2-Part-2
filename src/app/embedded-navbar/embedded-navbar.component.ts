/* EMBEDDED NAVBAR COMPONENT */
/* This Navbar will remain at the top of the screen at all times */
/* Credit: w3Schools - https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp */
import {Component} from '@angular/core';

@Component({
  selector: 'app-embedded-navbar',
  template: `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- ================NAVIGATION BAR=============== -->
    <!-- If vertical menu isn't toggled display NavBar Horizontally, otherwise display vertically -->
    <div [ngClass]="{'topnav': !verticalMenuToggled, 'responsive': verticalMenuToggled}" id="myTopnav">
      <a routerLink="home">Home</a>
      <a routerLink="add">Add Property</a>
      <a routerLink="list">Property List</a>
      <a routerLink="help">Help</a>
      <a routerLink="about-us">About Us</a>

      <!-- HAMBURGER ICON (Toggles Navbar between modes) -->
      <a class="icon" (click)="toggleNavbar()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <!-- ================NAVIGATION BAR=============== -->
  `,
  styleUrls: ['./embedded-navbar.component.css']
})

export class EmbeddedNavbarComponent
{
  verticalMenuToggled?: boolean; // verticalMenuToggles Boolean

  /* Toggle between vertical and horizontal bar menu */
  toggleNavbar(): void
  {
    this.verticalMenuToggled = !this.verticalMenuToggled;
  }

}
