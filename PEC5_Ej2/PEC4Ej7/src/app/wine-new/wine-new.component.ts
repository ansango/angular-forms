import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Wine from '../model/wine';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css'],
})
export class WineNewComponent implements OnInit {
  public wine!: Wine;
  public confirmed = false;
  constructor() {}

  ngOnInit(): void {
    
  }

  newWine(wineForm: { value: { wine: Wine }; invalid: any }) { 
    //? invalid no deberia ser bool?
    if (wineForm.invalid) {
      console.log('Correct all errors and resubmit the form');
    } else {
      this.wine = wineForm.value.wine;
      console.log('Creating wine ', this.wine);
    }
  }
}
