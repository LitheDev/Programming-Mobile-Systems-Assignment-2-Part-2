/*** Natalie Young ***/

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- NAVIGATION BAR -->
    <app-embedded-navbar></app-embedded-navbar>

    <!-- ROUTED CONTENT -->
    <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title: string = 'my-app';
}
