import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from "./booking.component";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [ BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    CollapseModule,
    BsDatepickerModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: "never"})
  ]
})
export class BookingModule { }
