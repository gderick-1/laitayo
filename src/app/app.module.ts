import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    LayoutModule
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
