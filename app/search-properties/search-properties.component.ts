import { Component } from '@angular/core';
import {Property} from "../property";
import {PROPERTIES} from "../properties-list";



@Component({
  selector: 'app-search-properties',
  template: `<h2>Properties List</h2>
  <ul class = "properties">
    <li *ngFor="let property of properties">

    </li>
  </ul>`,
  styleUrls: ['./search-properties.component.css']
})
export class SearchPropertiesComponent {
  properties: Property[] = PROPERTIES;

  selectedProperty?: Property;
}
