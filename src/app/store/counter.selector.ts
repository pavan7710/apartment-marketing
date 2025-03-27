import { createSelector } from '@ngrx/store'

export const selectCount = ( state : { counter : number } ) => state.counter