import {Component} from '@angular/core';
import {Property} from "../property";
import {PropertyService} from "../property.service";

@Component({
  selector: 'app-property-list',
  template: `

    <!-- Heading: Properties List -->
    <h2>Properties List</h2>

    <!-- UL: List of Properties -->


    <!-- Create card container (Will adjust how property cards stack based on width of screen) -->
    <div class="card-container">

      <!-- For each property in the properties array create a card -->
      <div class="card" *ngFor="let property of properties">

        <!-- Heading: Property Name -->
        <h2>Property Details: {{property.name}}</h2>

        <!-- Attributes -->
        <strong>ID: </strong> {{property.id}}
        <strong>Name: </strong>{{property.name}}
        <strong>Address: </strong> {{property.address}}
        <strong>Property Type: </strong> {{property.propertyType}}
        <strong>Listing Type: </strong> {{property.listType}}
        <strong>Bedrooms (#): </strong> {{property.bedroomCount}}
        <strong>Bathrooms (#): </strong> {{property.bathroomCount}}
        <strong>Parking Spots (#): </strong> {{property.parkingCount}}
        <strong>Price:  </strong> {{property.price}}
        <strong>Available (Date): </strong> {{property.availableDate}}

        <h2>Agent Details</h2>

        <strong>Name: </strong> {{property.agentName}}
        <strong>Email: </strong> {{property.agentEmail}}
        <strong>Contact: </strong> {{property.agentContact}}

      </div>
    </div>


  `,
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent
{
  properties: Property[] = [];

  constructor(private propertyService: PropertyService)
  {

  }





  getProperties(): void
  {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }

  ngOnInit(): void
  {
    this.getProperties();
  }

}
