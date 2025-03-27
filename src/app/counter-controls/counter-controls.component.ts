import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { decrement , increment } from '../store/counter.action'

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.scss'
})
export class CounterControlsComponent {

  constructor(private store: Store) {}

  decrement(){
    this.store.dispatch(decrement({
      value : 10
    }))
  }

  increment(){
    this.store.dispatch(increment({
      value : 2
    }))
  }
}
