import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'
import { counterReducer } from './store/counter.reducer';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component'
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post.effects';
import { HttpClientModule } from '@angular/common/http';

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
    StoreModule.forRoot({
      counter : counterReducer
    }),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
