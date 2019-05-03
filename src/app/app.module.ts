import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgorongoroComponent } from './ngorongoro/ngorongoro.component';
import { SerengetiComponent } from './serengeti/serengeti.component';
import { TarangireComponent } from './tarangire/tarangire.component';
import { ManyaraComponent } from './manyara/manyara.component';
import { ZanzibarComponent } from './zanzibar/zanzibar.component';
import { KilimanjaroComponent } from './kilimanjaro/kilimanjaro.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TravelguideComponent } from './travelguide/travelguide.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    NgorongoroComponent,
    SerengetiComponent,
    TarangireComponent,
    ManyaraComponent,
    ZanzibarComponent,
    KilimanjaroComponent,
    ContactComponent,
    HomeComponent,
    TravelguideComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
