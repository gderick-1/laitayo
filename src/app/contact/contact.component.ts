import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = this.fbLaitayo.group({
    'name': [''],
    'email': ['',  Validators.compose([
      Validators.required,
  	  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])],
    'phone': ['', Validators.compose([
      Validators.required,
  	  Validators.pattern('/^\+(?:[0-9] ?){6,14}[0-9]$/')
    ])],
    'message': ['']
  });
  
  constructor( private fbLaitayo: FormBuilder) {}
  ngOnInit() {}
  onSubmit(){
    // display form values when submit button clicked
    console.warn(this.contactForm.value);
  }

}
