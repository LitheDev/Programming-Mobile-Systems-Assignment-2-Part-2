import {Injectable} from '@angular/core';
import {Property} from "./property";
import {Observable, of} from "rxjs";
import {PROPERTIES} from "./properties-list";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }
  /* getProperties - Returns an array of Property Objects */
  getProperties(): Observable<Property[]>
  {
    return of(PROPERTIES);
  }




}
