import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'



interface ApartmentAttributes {
  id : number,
  pincode : number,
  city : string,
  unid : string,
  boq_emi : number
}

interface ApartmentData {
  id : string;
  type : string;
  attributes : ApartmentAttributes
}

export interface ApiResponse {
  'apartment count' : number;
  'number of pages' : number;
  data : {
    data : ApartmentData[]
  }
}
@Injectable({
  providedIn: 'root'
})
export class ApartmentserviceService {
  private apiUrl = 'https://qa-marketing-api.arrivae.com/v1/apartments?page=1&city=&search=&per_page=&lifestage=&theme=&vr_link=false'
  constructor( private http: HttpClient ) { }

  getApartments() :  Observable<ApiResponse>  {
    return this.http.get<ApiResponse>(this.apiUrl)
  }
}
