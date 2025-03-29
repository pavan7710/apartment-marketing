import { Component } from '@angular/core';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.scss'
})
export class CounterControlsComponent {

  constructor(private store: Store) {}

}
