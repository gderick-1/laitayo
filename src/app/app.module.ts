import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ConnectionService } from "./service/connection.service";
// import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ContactService } from './service/contact.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    LayoutModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot()
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ],
  providers: [ConnectionService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
