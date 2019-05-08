import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZanzibarRoutingModule } from './zanzibar-routing.module';
import { ZanzibarComponent } from "./zanzibar.component";

@NgModule({
  declarations: [ ZanzibarComponent],
  imports: [
    CommonModule,
    ZanzibarRoutingModule
  ]
})
export class ZanzibarModule { }
