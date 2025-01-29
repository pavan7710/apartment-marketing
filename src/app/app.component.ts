import { Component, OnInit } from '@angular/core';
import { ApartmentListingService } from './api/apartment-listing.service'
import { catchError, map, tap } from 'rxjs/operators';


interface Apartment {
  id: number;
  pincode: number;
  city: string;
  unid: string;
  boq_emi: number;
  apartment_name: string;
  developer_name: string;
  primary_image: string;
  vr_link: string;
  lifestage: string[];
  theme: string[];
  format: string[];
  space_name: string[];
  next: {
    id: number;
    city: string;
    unid: string;
    apartment_name: string;
  };
  previous: {
    id: number;
    city: string;
    unid: string;
    apartment_name: string;
  } | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Apartment-marketing';
  apartmentList: Apartment[] = [];

  constructor(private ApartmentListingService : ApartmentListingService ) {}
  ngOnInit(): void {
      this.ApartmentListingService.get().pipe(
        tap( data => console.log("Api response", data)),
        map(response => response.data.data.map((item: any) => item.attributes as Apartment)),
        catchError(error => {
          console.log("Error", error)
          return error
        })
      ).subscribe(
        data => {
          this.apartmentList = data
          console.log("Data", data)
        }
      )
  }

 
}