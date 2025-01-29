import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentListingService {

  private baseUrl : string ='https://marketing-api.arrivae.com/'

  constructor( private http:HttpClient ) { }


  get(): Observable<any> {
    let url = 'v1/apartments?page=1&city=&search=&per_page=6&lifestage=&theme=&vr_link=false' 
    return this.http.get(`${this.baseUrl}/${url}`)
  }

}
