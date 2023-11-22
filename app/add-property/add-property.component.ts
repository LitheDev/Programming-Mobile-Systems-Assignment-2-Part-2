/* ADD NEW PROPERTY COMPONENT */

import {Component} from '@angular/core';
import {Property} from "../property";
import {PropertyService} from "../property.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-property',
  template: `

    <!-- ================FOREGROUND HEADER=============== -->
    <div class="foreground-page-header">
      <h2>Add a new property</h2>
    </div>
    <!-- ================FOREGROUND HEADER=============== -->

    <!-- ================MENU: ADD NEW PROPERTY =============== -->
    <div class="menu" id="add-menu">
      <form #newPropertyForm="ngForm" (ngSubmit)="addProperty(newPropertyForm, newPropertyForm.value)">
        <h2>Property Details </h2>

        <div class="flex-container">
          <!-- ID | Required -->
          <div>
            <label for="propertyId">Property ID</label>
            <input type="number" id="propertyId" name="id" ngModel required>
          </div>

          <!-- Name | Required -->
          <div>
            <label for="propertyName">Property Name</label>
            <input type="text" id="propertyName" name="name" ngModel required>
          </div>

          <!-- Address | Required -->
          <div>
            <label for="propertyAddress">Property Address</label>
            <input type="text" id="propertyAddress" name="address" ngModel required>
          </div>

          <!-- Property Type | Required -->
          <div>
            <label for="propertyType">Property Type</label>
            <select id="propertyType" name="propertyType" ngModel required>
              <option value="House">House</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          <!-- Listing Type | Required -->
          <div>
            <label for="listingType">Listing Type</label>
            <select id="listingType" name="listingType" ngModel required>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>

          <!-- Bedroom Count -->
          <div>
            <label for="bedroomCount">Bedrooms (#)</label>
            <input type="number" id="bedroomCount" name="bedroomCount" ngModel>
          </div>

          <!-- Bathroom Count -->
          <div>
            <label for="bathroomCount">Bathrooms (#)</label>
            <input type="number" id="bathroomCount" name="bathroomCount" ngModel>
          </div>

          <!-- Parking Count -->
          <div>
            <label for="parkingCount">Parking Spots (#)</label>
            <input type="number" id="parkingCount" name="parkingCount" ngModel>
          </div>

          <!-- Available Date | Required -->
          <div>
            <label for="availableDate">Date Available</label>
            <input type="date" id="availableDate" name="availableDate" ngModel required>
          </div>

          <!-- Exclusive Listing -->
          <div>
            <label for="exclusiveListing">Exclusive Listing</label>
            <input type="checkbox" id="exclusiveListing" name="exclusiveListing" ngModel>
          </div>

          <!-- Price | Required -->
          <div>
            <label for="price">Price</label>
            <input type="number" id="price" name="price" ngModel required>
          </div>

          <!-- Agent Name | Required -->
          <div>
            <label for="agentName">Agent Name</label>
            <input type="text" id="agentName" name="agentName" ngModel required>
          </div>

          <!-- Agent Email | Required -->
          <div>
            <label for="agentEmail">Agent Email</label>
            <input type="text" id="agentEmail" name="agentEmail" ngModel required>
          </div>

          <!-- Agent Contact -->
          <div>
            <label for="agentContact">Agent Email</label>
            <input type="text" id="agentContact" name="agentContact" ngModel>
          </div>
        </div>

        <!-- BUTTON: SUBMIT -->
        <div class="button-menu">
          <button type="submit">Submit</button>
        </div>

      </form>
      <!-- SUBMIT BUTTON -->
      <p class="error-message">{{errorMessage}}</p>
    </div>
    <!-- ================MENU: ADD NEW PROPERTY =============== -->
  `,
  providers: [PropertyService],
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent
{
  errorMessage: string = "";

  /* CONSTRUCTOR (Injects PropertyService) */
  constructor(private propertyService: PropertyService)
  {
  }

  /***** FUNCTIONS *****/

  /* addProperty - Performs validation and then adds property to properties array */
  addProperty(newPropertyForm: NgForm, newProperty: Property): void
  {
    // If all required fields have input
    if (this.propertyService.validateForm(newPropertyForm))
    {
      // If the ID in the ID field already exists, return error message
      if (this.propertyService.idExists(newProperty.id))
      {
        this.errorMessage = "ID: " + newProperty.id + " already exists. Enter another ID."
      }
      // Else if the form input is valid and the ID is not taken, add the property to the array.
      else
      {
        this.propertyService.addProperty(newProperty);
        this.errorMessage = "Property: " + newProperty.name + " was added under ID: " + newProperty.id;
      }
    }
    // Else if the form input is NOT valid, return error message showing what fields have invalid inputs
    else
    {
      this.errorMessage = this.propertyService.getInvalidFields(newPropertyForm);
    }
  }
}

