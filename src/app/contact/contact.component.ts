import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { Subscription } from 'rxjs';
import { emailValidator, phoneValidator } from "../helpers/email.helper";
import { AngularFireDatabase } from '@angular/fire/database';
import { ContactService } from '../service/contact.service';

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
  registered = false;
  constructor(  private cdb: AngularFireDatabase,private fbLaitayo: FormBuilder, private contactService: ContactService) {}

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
    this.submitted = true;
    if(this.contactForm.invalid == true){
      return;
    } else {
      this.registered = true;
    }
    const contForm = this.contactForm.value;
    const name = contForm.name;
    const email = contForm.email;
    const phone = contForm.phone;
    const message = contForm.message;

    let contactRequest = { name, email, phone, message}

    this.cdb.list('/users').push(contactRequest);
    this.contactForm.reset();
  //   // display form values when submit button clicked
  //   this.submitted = true;
    
  //   // stop here if form is invalid
  //   if (this.contactForm.invalid) {
  //     return;
  // }

  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value));
  // console.log(this.contactForm.value);
  // this.contactService.sendContacts(this.contactForm.value).subscribe(() =>{
  //   alert('Your message has been sent successful');
  //   this.contactForm.reset();
  // }, error => {
  //   console.error('ERROR:', error);
  // });
  // console.warn(this.contactForm.value);
  }

}
