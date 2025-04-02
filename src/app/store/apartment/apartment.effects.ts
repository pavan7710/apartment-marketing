import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {  of  } from 'rxjs'
import {  mergeMap , map  , catchError, tap} from 'rxjs/operators'
import { ApartmentserviceService } from '../../services/apartmentservice.service'
import { loadApartments , loadApartmentsFailure , loadApartmentsSuccess } from './apartment.action'




@Injectable()

export class ApartmentEffect {
    private actions$ = inject(Actions);
    private apartmentService =  inject(ApartmentserviceService)
    loadApartments$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadApartments),
            tap(() => console.log('loadApartments action received in effect')),
            mergeMap(() => this.apartmentService.getApartments().pipe(
                // map(response => loadApartmentsSuccess({response})),
                map((response) => {
                    console.log(response)
                    return loadApartmentsSuccess( {response} )
                }),
                catchError(error => of(loadApartmentsFailure({error})))
            ))
        )
    );
}