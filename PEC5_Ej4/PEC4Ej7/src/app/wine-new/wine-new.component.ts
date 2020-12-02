import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Wine from '../model/wine';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css'],
})
export class WineNewComponent implements OnInit {
  public message = '';
  public wineForm!: FormGroup;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.wineForm = this.builder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern('^http(s?)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(/S*)?$'),
        ],
      ],
      isOnSale: false,
    });
  }

  createWine(wineForm: { value: { wine: Wine }; invalid: any }) {
    if (this.wineForm.invalid) {
      this.message = 'CHECK ERRORS';
      console.log(this.message);
    } else {
      const wine: Wine = this.wineForm.value;
      console.log('Creating a New Wine...', wine);
    }
  }
}
