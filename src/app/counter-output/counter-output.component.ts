import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable  } from 'rxjs'
import { selectCount } from '../store/counter.selector';
 
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent {
    count$ : Observable<number>;

    constructor(private store : Store<{counter : number}>){
      this.count$ = store.select(selectCount)
    }
}