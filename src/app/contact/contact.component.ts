import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

import { emailValidator, phoneValidator } from "../helpers/email.helper";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailValidator =  emailValidator;
  phoneValidator = phoneValidator;
  contactForm: FormGroup;
  submitted = false;
  constructor( private fbLaitayo: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fbLaitayo.group({
      name: new FormControl(
        '', [
            Validators.required,
            Validators.minLength(4)
      ]),
      email: new FormControl(
        '',
            Validators.compose([
              Validators.required,
              Validators.pattern(this.emailValidator)
            ])
      ),
      phone:  new FormControl(
        null,
           Validators.compose([
             Validators.required, 
             Validators.pattern(this.phoneValidator)
            ])
      ),
      message: new FormControl(
      '', 
        Validators.compose([
          Validators.required, 
          Validators.maxLength(350)
      ])
     )
    });
  }
  // get method for convinience access of form fields
  // get Laitayo() {
  //   return this.contactForm.controls;
  // }
  
  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get phone(){
    return this.contactForm.get('phone');
  }
  get message(){
    return this.contactForm.get('message');
  }
  onSubmit(){
    // display form values when submit button clicked
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
  }

  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value));
  console.warn(this.contactForm.value);
  }

}
