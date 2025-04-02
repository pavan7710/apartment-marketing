import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component'
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { apartmentReducer } from './store/apartment/apartment.reducer';
import { ApartmentserviceService } from './services/apartmentservice.service';
import { ApartmentEffect } from './store/apartment/apartment.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'


@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ apartment: apartmentReducer }),
    EffectsModule.forRoot([ApartmentEffect]),
    StoreDevtoolsModule.instrument({
      maxAge : 25,
      logOnly : false
    })
  ],
  providers: [ApartmentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
