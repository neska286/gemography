import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { HomeComponent } from './component/home/home.component';
import { DiplayNumberPipe } from './pipes/diplay-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiplayNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
