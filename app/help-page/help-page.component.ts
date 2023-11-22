/* HELP COMPONENT */

import { Component } from '@angular/core';

@Component({
  selector: 'app-help-page',
  template: `

    <!-- ================FOREGROUND HEADER=============== -->
    <div class="foreground-page-header">
      <h2>How to use this website</h2>
    </div>
    <!-- ================FOREGROUND HEADER=============== -->

    <!-- ================FOREGROUND ELEMENT =============== -->
      <div class="foreground">
        <h2>Adding a property</h2>
        <p>In the navigation bar click "Add Property". All fields are required except for Bathroom Count, Bedroom Count, Parking Spot Count and Agent Contact Number. If a required field is not filled or the ID already exists in the properties array, the submission will fail and an error message will inform why. Optional fields left empty will be set to 0</p>
      </div>
    <!-- ================FOREGROUND ELEMENT =============== -->

    <!-- ================FOREGROUND ELEMENT =============== -->
    <div class="foreground">
      <h2>Viewing Properties</h2>
      <p>In the navigation bar click "Property List" to view all current properties. In this menu is a search function that will allow for filtering by ID, or by the properties exclusive status.</p>
    </div>
    <!-- ================FOREGROUND ELEMENT =============== -->

    <!-- ================FOREGROUND ELEMENT =============== -->

    <div class="foreground">
      <h2>Selecting a Property</h2>
      <p>After viewing the property list, each property will have a select button. Selecting a property will allow for editing or deleting of the selected property.</p>
    </div>
    <!-- ================FOREGROUND ELEMENT =============== -->

    <!-- ================FOREGROUND ELEMENT =============== -->
    <div class="foreground">
      <h2>Editing and Deleting Existing Properties</h2>
      <p>After a property has been selected a form almost identical to the one seen in 'Add a Property' will display. This form follows the same rule requirements except ID cannot be altered. To finish making changes, press submit.</p>
      <p>Additionally, at the bottom of this form a delete button will be displayed. Clicking this and then pressing yes to confirm will erase the selected property.</p>
    </div>
    <!-- ================FOREGROUND ELEMENT =============== -->
  `,
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent {

}
