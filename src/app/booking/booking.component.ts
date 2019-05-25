import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { emailValidator, phoneValidator } from "../helpers/email.helper";

// 

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  // 
  showAction: boolean = true;
  emailPattern = emailValidator;
  phonePattern = phoneValidator; 
  bookForm: FormGroup;
  submitted = false;
  constructor( private bookLaitayo: FormBuilder) {}
  ngOnInit(): void {
    this.bookForm = this.bookLaitayo.group({
      name: new FormControl('', [
            Validators.required,
      ]),
      email: new FormControl('',
           Validators.compose([
             Validators.required,
             Validators.pattern(this.emailPattern)
       ])), 
      phone: new FormControl(null,
          Validators.compose([
           Validators.required,
           Validators.pattern(this.phonePattern)
         ])),
      dateFrom: new FormControl(
        '',
        Validators.compose([
          Validators.required,
         ])
      ),
      dateTo: new FormControl(
        '', 
            Validators.compose([
              Validators.required, 
              
            ])
          
      ),
      message: new FormControl(
        '', 
            Validators.compose([
              Validators.required, 
              Validators.maxLength(350)
            ])
      ),
      adults: new FormControl(
        null, 
            Validators.required
      ),
      child: new FormControl(
        null,
            Validators.required
      )
    });
  }

  get name(){
    return this.bookForm.get('name');
  }
  get email(){
    return this.bookForm.get('email');
  }
  get dateFrom(){
    return this.bookForm.get('dateFrom');
  }
  get dateTo(){
    return this.bookForm.get('dateTo');
  }
  get message(){
    return this.bookForm.get('message');
  }
  get adults(){
    return this.bookForm.get('adults');
  }
  get child(){
    return this.bookForm.get('child');
  }
  get phone(){
    return this.bookForm.get('phone');
  }

  get Laitayo() {
    return this.bookForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.bookForm.invalid) {
      return;
  }

  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookForm.value));
    console.warn(this.bookForm.value);
  };
}
