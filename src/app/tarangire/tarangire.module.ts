import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarangireRoutingModule } from './tarangire-routing.module';
import { TarangireComponent } from "./tarangire.component";

@NgModule({
  declarations: [ TarangireComponent],
  imports: [
    CommonModule,
    TarangireRoutingModule
  ]
})
export class TarangireModule { }
