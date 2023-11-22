/* PROPERTY LIST COMPONENT
* Displays list of all properties in the array
 */

import {Component} from '@angular/core';
import {Property} from "../property";
import {PropertyService} from "../property.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-property-list',
  template:

    `
      <!-- ================FOREGROUND HEADER=============== -->
      <div class="foreground-page-header">
        <h2>View Properties</h2>
      </div>
      <!-- ================FOREGROUND HEADER=============== -->

      <!-- ================SEARCH MENU=============== -->
      <div class=foreground-utility id="search-menu">
        <form autocomplete="off">
          <input type="number" placeholder="Filter By ID" #filter>
          <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
        </form>
        <br>

        <label for="exclusiveCheckbox">View Exclusive Listings Only</label>
        <input type="checkbox" id="exclusiveCheckbox" (change)="viewExclusive()">
      </div>
      <!-- ================SEARCH MENU=============== -->

      <!-- ================EDIT MENU IF=============== -->
      <div class="menu" *ngIf="selectedProperty">

        <!-- FORM: EDIT PROPERTY INFO -->
        <form #editPropertyForm="ngForm" (ngSubmit)="onSubmit(editPropertyForm)">
          <h2>Editing Property: {{selectedProperty.name}} (ID: {{selectedProperty.id}})</h2>

          <div class="flex-container">
            <!-- Name | Required -->
            <div>
              <label for="propertyName">Property Name</label>
              <input type="text" id="propertyName" name="name" [(ngModel)]="selectedProperty.name" required>
            </div>

            <!-- Address | Required -->
            <div>
              <label for="propertyAddress">Property Address</label>
              <input type="text" id="propertyAddress" name="address" [(ngModel)]="selectedProperty.address" required>
            </div>

            <!-- Property Type | Required -->
            <div>
              <label for="propertyType">Property Type</label>
              <select id="propertyType" name="propertyType" [(ngModel)]="selectedProperty.propertyType" required>
                <option value="House">House</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>

            <!-- Listing Type | Required -->
            <div>
              <label for="listingType">Listing Type</label>
              <select id="listingType" name="listingType" [(ngModel)]="selectedProperty.listingType" required>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
            </div>

            <!-- Bedroom Count -->
            <div>
              <label for="bedroomCount">Bedrooms (#)</label>
              <input type="number" id="bedroomCount" name="bedroomCount" [(ngModel)]="selectedProperty.bedroomCount">
            </div>

            <!-- Bathroom Count | Required -->
            <div>
              <label for="bathroomCount">Bathrooms (#)</label>
              <input type="number" id="bathroomCount" name="bathroomCount" [(ngModel)]="selectedProperty.bathroomCount">
            </div>

            <!-- Parking Count -->
            <div>
              <label for="parkingCount">Parking Spots (#)</label>
              <input type="number" id="parkingCount" name="parkingCount" [(ngModel)]="selectedProperty.parkingCount">
            </div>

            <!-- Available Date | Required -->
            <div>
              <label for="availableDate">Date Available</label>
              <input type="date" id="availableDate" name="availableDate" [(ngModel)]="selectedProperty.availableDate"
                     required>
            </div>

            <!-- Exclusive Listing -->
            <div>
              <label for="exclusiveListing">Exclusive Listing</label>
              <input type="checkbox" id="exclusiveListing" name="exclusiveListing"
                     [(ngModel)]="selectedProperty.exclusiveListing">
            </div>

            <!-- Price | Required -->
            <div>
              <label for="price">Price</label>
              <input type="number" id="price" name="price" [(ngModel)]="selectedProperty.price" required>
            </div>

            <!-- Agent Name | Required -->
            <div>
              <label for="agentName">Agent Name</label>
              <input type="text" id="agentName" name="agentName" [(ngModel)]="selectedProperty.agentName" required>
            </div>

            <!-- Agent Email | Required -->
            <div>
              <label for="agentEmail">Agent Email</label>
              <input type="email" id="agentEmail" name="agentEmail" [(ngModel)]="selectedProperty.agentEmail" required>
            </div>

            <!-- Agent Contact -->
            <div>
              <label for="agentContact">Agent Number</label>
              <td><input type="number" id="agentContact" name="agentContact" [(ngModel)]="selectedProperty.agentContact">
            </div>

          </div>

          <br>

          <!-- Button: Delete -->
          <div class="button-menu">
            <button type="submit">Submit</button>
            <button type="button" (click)=onDelete()>Delete</button>
          </div>

          <!-- Deletion Prompt | Buttons: Yes | No -->
          <div *ngIf="deletionPrompt">
            <p class="error-message">Are you sure you want to delete this entry?</p>
            <div class="button-menu">
              <button type="button" (click)=confirmDelete(selectedProperty,true)>Yes</button>
              <button type="button" (click)=confirmDelete(selectedProperty,false)>No</button>
            </div>
          </div>
          <br>

          <!-- ERROR MESSAGE -->
          <p class="error-message">{{errorMessage}}</p>
        </form>
      </div>
      <!-- ================EDIT MENU IF=============== -->

      <!-- ================PROPERTY CARDS FOR EACH=============== -->
      <div class="card-container">
        <div class="card" *ngFor="let property of filteredPropertyList">

          <h2>Property Details: {{property.name}} (ID: {{property.id}})</h2>
          <!-- TABLE: PROPERTY INFO -->
          <table>
            <div class="table-container">

              <!-- ATTRIBUTE 1, 2, 3 | ID, NAME, ADDRESS -->
              <tr>
                <th><strong>ID </strong></th>
                <th><strong>Name </strong></th>
                <th><strong>Address </strong></th>
              </tr>
              <tr>
                <td>{{property.id}}</td>
                <td>{{property.name}}</td>
                <td>{{property.address}}</td>
              </tr>

              <!-- ATTRIBUTE 4, 5, 6 | TYPES, PRICE -->
              <tr>
                <th><strong>Property Type</strong></th>
                <th><strong>Listing Type </strong></th>
                <th><strong>Price</strong></th>
              </tr>
              <tr>
                <td>{{property.propertyType}}</td>
                <td>{{property.listingType}}</td>
                <td>{{property.price}}</td>
              </tr>

              <!-- ATTRIBUTE 7, 8, 9 | BEDROOM COUNT, BATHROOM COUNT, PARKING COUNT -->
              <tr>
                <th><strong>Bedrooms (#)</strong></th>
                <th><strong>Bathrooms (#) </strong></th>
                <th><strong>Parking (#)</strong></th>
              </tr>
              <tr>
                <td>{{property.bedroomCount}}</td>
                <td>{{property.bathroomCount}}</td>
                <td>{{property.parkingCount}}</td>
              </tr>

              <!-- ATTRIBUTE 10, 11 | DATE AVAILABLE, EXCLUSIVITY -->
              <tr>
                <th><strong>Date Available</strong></th>
                <th><strong>Exclusivity</strong></th>
              </tr>
              <tr>
                <td>{{property.availableDate}}</td>

                <!-- IF: Property is exclusive, list it as exclusive. -->
                <td *ngIf="property.exclusiveListing; else elseBlock">Exclusive</td>
                <ng-template #elseBlock>
                  <td>Not Exclusive</td>
                </ng-template>
              </tr>
            </div>
          </table>

          <!-- TABLE: AGENT DETAILS -->
          <h2>Agent Details</h2>
          <table>

            <!-- ATTRIBUTE 1, 2, 3 | NAME, EMAIL, PHONE NUMBER -->
            <tr>
              <th><strong>Name:</strong></th>
              <th><strong>Email: </strong></th>
            </tr>
            <tr>
              <td>{{property.agentName}}</td>
              <td>{{property.agentEmail}}</td>
            </tr>
            <tr>
              <th><strong>Phone (#)</strong></th>
            </tr>
            <tr>
              <td>{{property.agentContact}}</td>
            </tr>
          </table>

          <!-- BUTTONS (IF NO SELECTED PROPERTY) | DELETE, SELECT -->
          <div class="button-menu" *ngIf="!selectedProperty">
            <div class="button-container">
              <div class="button-center">
                <button type="button" (click)="onSelect(property)">Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ================PROPERTY CARDS FOR EACH=============== -->

    `,
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent
{
  propertyList: Property[] = [];
  filteredPropertyList: Property[] = [];
  errorMessage: string = "";

  selectedProperty?: Property;
  exclusiveOnly?: boolean;
  deletionPrompt?: boolean;

  /* Constructor - Implements propertyService */
  constructor(private propertyService: PropertyService)
  {
    this.propertyList = this.propertyService.getAllProperties();  // All properties
    this.filteredPropertyList = this.propertyList;                // Filtered property list
  }

  /**** FUNCTIONS ****/

  /*** GETTERS ***/

  /* getFilteredArray - Returns filtered property array */
  getFilteredArray(): Property[]
  {
    return (this.filteredPropertyList)
  }

  /*** SETTERS ***/

  /* onSelect - Sets the value of selectedProperty to the property where the select button was clicked
 * Note: The delete and select button will disappear from other properties while the select menu is open */
  onSelect(property: Property)
  {
    this.selectedProperty = property;
  }

  /* onDelete - Sets deletion prompt to true, triggering yes/no prompt on DOM
 */
  onDelete(): void
  {
    this.deletionPrompt = true;
  }

  /* viewExclusive - Checks status of checkbox and displays only exclusive properties */
  viewExclusive(): void
  {
    this.exclusiveOnly = !this.exclusiveOnly;
    this.filterResults();
  }


  /* onSubmit - If the form is valid, closes the menu. If not, prompts error message */
  onSubmit(form: NgForm): void
  {
    // If the form is valid
    if (this.propertyService.validateForm(form))
    {
      this.propertyService.checkOptionalFields(this.selectedProperty!); // Set optional fields to 0 if empty
      this.selectedProperty = undefined;                                // Close select menu
      this.errorMessage = "";                                           // Reset error messagee

    }

    // If form is not valid, check what fields are invalid and return error message
    else
    {
      this.errorMessage = this.propertyService.getInvalidFields(form);
    }
  }

  /*** FILTERS ***/

  /* filterResults - Used for searching and viewing exclusive results (Or both together) */
  filterResults(criteria?: string): void
  {
    // Show the properties matching NO criteria
    if (!criteria && !this.exclusiveOnly)
    {
      this.filteredPropertyList = this.propertyList
      return;
    }
    else
    {
      // Show only the properties that match the search criteria AND are exclusive
      if (criteria && this.exclusiveOnly)
      {
        this.filteredPropertyList = this.propertyList.filter(property => property?.id.toString().includes(criteria.toString()));
        this.filteredPropertyList = this.filteredPropertyList.filter(property => property?.exclusiveListing);
      }
      else
      {
        // Show only the properties that match the search criteria
        if (criteria)
        {
          this.filteredPropertyList = this.propertyList.filter(property => property?.id.toString().includes(criteria.toString()));
        }
        // Show only the properties that are exclusive
        if (this.exclusiveOnly)
        {
          this.filteredPropertyList = this.filteredPropertyList.filter(property => property?.exclusiveListing);
        }
      }
    }
  }

  /*** DATA MANIPULATORS ***/

  /* deleteProperty - Takes ID number and array, checks to see if the ID exists and then deletes it */
  deleteProperty(id: number): void
  {
    this.propertyService.deleteProperty(id, this.getFilteredArray());
  }

  /* confirmDelete - After user clicks yes or no, the respective option is passed and the property is either deleted, or not deleted */
  confirmDelete(property: Property, choice: boolean): void
  {
    // If choice is yes, delete property and reset selected property
    if (choice)
    {
      this.deleteProperty(property.id)
      this.selectedProperty = undefined;
    }

    // Revert deletionPrompt back to false
    this.deletionPrompt = false;
  }
}

