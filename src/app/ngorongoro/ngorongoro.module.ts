import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgorongoroRoutingModule } from './ngorongoro-routing.module';
import { NgorongoroComponent } from "./ngorongoro.component";

@NgModule({
  declarations: [ NgorongoroComponent],
  imports: [
    CommonModule,
    NgorongoroRoutingModule
  ]
})
export class NgorongoroModule { }
