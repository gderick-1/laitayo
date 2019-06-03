import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

import { emailValidator, phoneValidator } from "../helpers/email.helper";
import { Subscription } from 'rxjs';
import { ConnectionService } from '../service/connection.service';
import { BsDatepickerDirective, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { SendEmailServiceService } from '../service/send-email-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  // currentDate: number #047ffc;
  minDate: Date;
  maxDate: Date;
  colorTheme = 'dark-blue';
  showAction: boolean = false;
  emailPattern = emailValidator;
  phonePattern = phoneValidator;
  bsConfig: Partial<BsDatepickerConfig>; 
  bookForm: FormGroup;
  isCollapsed = true;
  submitted = false;
  registered = false;

  // currentDate = new Date().toLocaleDateString('en-US');
  //date picker 
  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;
 
  @HostListener('window:scroll')
    onScrollEvent() {
      this.datepicker.hide();
  }

  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      pop.show();
    });
  }

  constructor( private db: AngularFireDatabase, private connectionService: ConnectionService, private bookLaitayo: FormBuilder) {
    this.minDate = new Date();
    this.maxDate = new Date();

    this.minDate.setDate(this.minDate.getDate()+1);
    this.maxDate.setDate(this.maxDate.getDate()+360);
  }
    
  ngOnInit(){
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
      arrivalDate: new FormControl(
        '',
        Validators.compose([
          Validators.required,
         ])
      ),
      departureDate: new FormControl(
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
  get arrivalDate(){
    return this.bookForm.get('arrivalDate');
  }
  get departureDate(){
    return this.bookForm.get('departureDate');
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

  // get Laitayo() {
  //   return this.bookForm.controls;
  // }
 

  onSubmit(){
    this.submitted = true;
    if (this.bookForm.invalid == true) {
      return;
    } else {
      this.registered = true;
    }
    // form: FormGroup
    const  bookform = this.bookForm.value;
    const name = bookform.name;
    const email = bookform.email;
    const phone = bookform.phone;
    const message = bookform.message;
    const arrival = bookform.arrivalDate;
    const departure = bookform.departureDate;
    const adults = bookform.adults;
    const child = bookform.child;
    console.log(bookform);
    let bookRequest = { name, email, phone, message, arrival, departure, adults, child}
    this.db.list('/booking').push(bookRequest);
    this.bookForm.reset();

  // this.connectionService.sendMessage(this.bookForm.value).subscribe(()=>{
  //   alert('Your book has been placed\n We will reachout soon.');
  //   this.bookForm.reset();
  // }, error => {
  //   console.log('Error:', error);
  // });
  };

  ngOnDestroy(){ }
}
