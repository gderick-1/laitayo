import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgorongoroComponent } from './ngorongoro/ngorongoro.component';
import { SerengetiComponent } from './serengeti/serengeti.component';
import { TarangireComponent } from './tarangire/tarangire.component';
import { ManyaraComponent } from './manyara/manyara.component';
import { ZanzibarComponent } from './zanzibar/zanzibar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgorongoroComponent,
    SerengetiComponent,
    TarangireComponent,
    ManyaraComponent,
    ZanzibarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
