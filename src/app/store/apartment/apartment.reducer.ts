import { createReducer , on } from '@ngrx/store'
import { loadApartments , loadApartmentsFailure , loadApartmentsSuccess } from './apartment.action'
import { ApiResponse , ApartmentData } from '../../services/apartmentservice.service'


export interface ApartmentState {
    apartments : any | null ;
    apartmentCount : number 
    apartmentUnids : string[];
    loading : boolean ;
    error : any,
    listData : ApartmentData[]
}

export const initialState : ApartmentState = {
    apartments : null, 
    apartmentCount : 0,
    apartmentUnids : [],
    loading : false,
    error : null,
    listData :  []
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
        error : null,
        listData : response.data.data
    })),
    on(loadApartmentsFailure , ( state , { error } ) => ({
        ...state,
        loading : false,
        error
    }) )
)