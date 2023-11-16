import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-embedded-navbar></app-embedded-navbar>
  <router-outlet></router-outlet>
  <app-property-list></app-property-list>`
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
