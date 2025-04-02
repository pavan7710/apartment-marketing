import { Component, OnInit  } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { Observable  } from 'rxjs'
import { ApiResponse , ApartmentData } from '../services/apartmentservice.service';
import { ApartmentState } from '../store/apartment/apartment.reducer';
import { loadApartments } from '../store/apartment/apartment.action';
 
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit {
    // count$ : Observable<number>;

    // constructor(private store : Store<{counter : number}>){
    //   this.count$ = store.select(selectCount)
    // }

    apartments$ : Observable<ApiResponse | null>
    listData$ : Observable<ApartmentData[]>

    constructor( private store: Store< { apartment : ApartmentState }  >  ) {
      this.apartments$ = store.pipe(select(state => state.apartment.apartments))
      this.listData$ = store.pipe(select(state => state.apartment.listData))
    }

    ngOnInit(): void {
      this.store.dispatch(loadApartments())
    }

  
}