import { createReducer , on } from '@ngrx/store'
import { loadApartments , loadApartmentsFailure , loadApartmentsSuccess } from './apartment.action'
import { ApiResponse } from '../../services/apartmentservice.service'


export interface ApartmentState {
    apartments : ApiResponse | null ;
    apartmentCount : number 
    apartmentUnids : string[];
    loading : boolean ;
    error : any
}

export const initialState : ApartmentState = {
    apartments : null, 
    apartmentCount : 0,
    apartmentUnids : [],
    loading : false,
    error : null
}

export const apartmentReducer = createReducer(
    initialState ,
    on(loadApartments , state => ({ ...state , loading : true })),
    on(loadApartmentsSuccess , (state , {response}) => ({
        ...state,
        apartments : response,
        apartmentCount : response['apartment count'],
        apartmentUnids : response.data.data.map(apartment => apartment.attributes.unid),
        loading : false,
        error : null
    })),
    on(loadApartmentsFailure , ( state , { error } ) => ({
        ...state,
        loading : false,
        error
    }) )
)