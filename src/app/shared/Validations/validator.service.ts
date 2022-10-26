import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public name_lastnamePattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; 
 
  cantBeStrider (control: FormControl): ValidationErrors | null{
    const value: string = control.value?.trim().toLowerCase();
    // console.log(value);
    
    if (value === 'strider'){
      return {
        noStrider: true
      }
    }
    return null;
    
  }

  constructor() { }
}
