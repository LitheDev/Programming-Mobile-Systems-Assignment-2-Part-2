import {Injectable} from '@angular/core';
import {Property} from "./property";
import {PROPERTIES} from "./properties-list";
import {AbstractControl, NgForm} from "@angular/forms";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropertyService
{
  properties: Property[] = PROPERTIES;  // Property Array
  position?: number;                    // Position in array (Used for finding IDs)

  /* CONSTRUCTOR */
  constructor() {
  }

  /***** FUNCTIONS *****/

  /*** GETTERS ***/

  /* getAllProperties - Returns an array of properties */
  getAllProperties(): Property[]
  {
    this.validateArray();
    return this.properties;
  }

  /* getIdIndex - Checks to see if Property ID exists in array. Returns index number if found, returns -1 if not found */
  getIdIndex(id: number, propertyArray: Property[]): number
  {
    // For each property in array add counter to I
    for (let i: number = 0; i < propertyArray.length; i++)
    {
      // If property ID is found, return index
      if (propertyArray[i].id === id)
      {
        return (i);
      }
    }
    // Return -1 if ID is not found
    return (-1);
  }

  /* idExists - Checks to see if the Property Id exists in the global properties array. Returns true if found, false if not found */
  idExists(id: number): boolean
  {
    // For each property in array add counter to I
    for (let i: number = 0; i < this.properties.length; i++)
    {
      // If property ID is found, return true
      if (this.properties[i].id === id)
      {
        return true;
      }
    }
    // Return false if ID is not found
    return false;
  }


  /*** DATA MANIPULATORS ***/

  /* addProperty - Adds property to property array */
  addProperty(property: Property): void
  {
    // Check all optional fields (and set them to 0 where applicable), then add property to array.
    this.checkOptionalFields(property);
    {
      this.properties.push(property);
    }
  }

  /* deleteProperty - Checks ID of property and then returns the index of that property from the array. Deletes that index from the array. */
  deleteProperty(id: number, array: Property[]): void
  {
    console.log("Deleting: " + id + "from array: " + this.properties);

    // Check if the ID exists in the array and find its index
    this.position = this.getIdIndex(id, array);

    // If index position is 0 or greater delete it from passed array
    if (this.position >= 0)
    {
      array.splice(this.position!, 1);
    }
    this.position = -1;

    // Check if ID exists in the array and find its index
    this.position = this.getIdIndex(id, this.properties);

    // If index position is 0 or greater, delete it from global array
    if (this.position >= 0)
    {
      this.properties.splice(this.position!, 1);
    }
    this.position = -1;
  }

  /*** VALIDATORS ***/

  /* ValidateForm - Takes NgForm and returns true or false depending on whether it is valid or not */
  validateForm(form: NgForm): boolean
  {
    return !!form.valid;
  }

  /* getInvalidFields - In the event a form is invalid it returns an error message stating what forms have invalid values */
  getInvalidFields(form: NgForm): string
  {
    const fields: {[key: string]: AbstractControl} = form.controls        // Form controls (Key is FieldName)
    let errorString: string = "The following fields have invalid input: " // Error message to be returned

    // Iterate through key/value pairs of form, for each key value pair
    Object.keys(fields).forEach(fieldName =>
    {
      const field: AbstractControl<string, string> = fields[fieldName]; // Set field to fieldName

      // If field value is empty and it is not an optional field, add fieldName to the error string
      if (field.value === "" && (fieldName !== "bedroomCount" && fieldName !== "bathroomCount" && fieldName !== "parkingCount" && fieldName !== "agentContact"))
      {
        errorString += fieldName + ", ";
      }
    })

    errorString = errorString.slice(0, -2) + "." // Remove end of string and replace with full stop
    console.log(errorString);                    // Log error
    return errorString;                          // Return Error String
  }

  /* validateArray - Sets all optional fields to 0 */
  validateArray(): void
  {
    for (let i: number = 0; i < this.properties.length; i++)
    {
      this.checkOptionalFields(this.properties[i]);
    }

  }

  /* checkOptionalFields - Takes a property and checks optional parameters. Sets them to 0 if they do not have a value */
  checkOptionalFields(property: Property)
  {
    property.bedroomCount = this.checkOptionalField(property.bedroomCount!);
    property.bathroomCount = this.checkOptionalField(property.bathroomCount!);
    property.parkingCount = this.checkOptionalField(property.parkingCount!);
    property.agentContact = this.checkOptionalField(property.agentContact!);

  }

  /* checkOptionalField - Checks an optional parameter to see if it has a value, sets to 0 if it does not or is under 0 */
  checkOptionalField(attribute: number): number
  {
    if (!attribute || attribute < 0)
    {
      return 0;
    }
    else
    {
      return attribute;
    }
  }
}
