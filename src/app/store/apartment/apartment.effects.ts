import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { ApartmentserviceService } from '../../services/apartmentservice.service'
import { loadApartments , loadApartmentsFailure , loadApartmentsSuccess } from './apartment.action'




@Injectable()

export class ApartmentEffect {
   
    loadApartments$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadApartments),
            mergeMap(() => this.apartmentService.getApartments().pipe(
                map(response => loadApartmentsSuccess({response})),
                catchError(error => of(loadApartmentsFailure({error})))
            ))
        )
    )


    constructor (
        private actions$ : Actions,
        private apartmentService : ApartmentserviceService
    ) {}
}