import { Component, OnInit } from '@angular/core';
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
    //this.stock = new Stock('', '', 0, 0, 'NASDAQ');
  }

  newWine(wineForm: { value: { wine: Wine }; valid: any }) {
    console.log('Stock form', wineForm.value);
    if (wineForm.valid) {
      this.wine = wineForm.value.wine;
      console.log('Creating wine ', this.wine);
    } else {
      console.error('Wine form is in an invalid state');
    }
  }
}
