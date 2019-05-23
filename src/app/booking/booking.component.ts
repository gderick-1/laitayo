import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  showAction: boolean = true;
 
  bookForm = this.bookLaitayo.group({
    'name': ['', Validators.required],
    'email': ['', Validators.compose([
      Validators.required,
  	  // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])],
    'phone': ['', Validators.compose([
      Validators.required,
  	  // Validators.pattern('/^\+(?:[0-9] ?){6,14}[0-9]$/')
    ])],
    'dateFrom': [''],
    'dateTo': [''],
    'message': ['', Validators.required],
    'adults': [''],
    'child': ['']
  });
  
  constructor( private bookLaitayo: FormBuilder) {}
  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.bookForm.value);
  };
}
