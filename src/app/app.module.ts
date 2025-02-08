import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicTableComponent } from './shared/dynamic-table/dynamic-table.component';
import { ApartmentTableComponent } from './apartment-table/apartment-table.component'

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    ApartmentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
