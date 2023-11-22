/* HOME COMPONENT */
import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <!-- ================FOREGROUND HEADER=============== -->
    <div class="foreground-page-header">
      <h2>Real Estate Website</h2>
    </div>
    <!-- ================FOREGROUND HEADER=============== -->

    <!-- ================FOREGROUND HEADER=============== -->
    <div class="foreground">
      <h2>Welcome</h2>
      <p>Welcome to my real estate website. I created this as part of my assignment at university. CSS was not required, but I wanted to make it look nice for my portfolio later and to test myself.</p>
    </div>
    <!-- ================FOREGROUND HEADER=============== -->

    <!-- ================FOREGROUND HEADER=============== -->
    <div class="foreground">
      <h2>Manage Properties</h2>
      <p>You can manage properties here (So fun)</p>
    </div>
    <!-- ================FOREGROUND HEADER=============== -->

    <!-- ================FOREGROUND HEADER=============== -->
    <div class="foreground">
      <h2>Delete Properties</h2>
      <p>You can also delete properties here. Be warned, if a property is deleted, a bulldozer will be dispatched within 3 business days to destroy the deleted house! Make sure you let the occupants know to vacate!</p>
    </div>
    <!-- ================FOREGROUND HEADER=============== -->`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{

}
