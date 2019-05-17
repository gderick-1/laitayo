import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerengetiRoutingModule } from './serengeti-routing.module';
import { SerengetiComponent } from "./serengeti.component";

@NgModule({
  declarations: [ SerengetiComponent],
  imports: [
    CommonModule,
    SerengetiRoutingModule
  ]
})
export class SerengetiModule { }
