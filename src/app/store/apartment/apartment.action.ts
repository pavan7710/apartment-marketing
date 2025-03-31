import { createAction , props } from '@ngrx/store'
import { ApiResponse } from '../../services/apartmentservice.service'

export const loadApartments = createAction('[Apartment] Load Apartments')

export const loadApartmentsSuccess = createAction(
    '[ Apartment ] Load Apartments Success',
    props<{response : ApiResponse}>()
)

export const loadApartmentsFailure = createAction(
    '[Apartment]  Load Apartments Failure',
    props<{error : any}>()
)