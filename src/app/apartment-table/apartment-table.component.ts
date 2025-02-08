import { Component, OnInit } from '@angular/core';
import { ApartmentListingService } from '../api/apartment-listing.service';
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
  selector: 'app-apartment-table',
  templateUrl: './apartment-table.component.html',
  styleUrl: './apartment-table.component.scss'
})
export class ApartmentTableComponent implements OnInit {

    columns = [
      {field : "id"  , header : "ID"},
      {field : "apartment_name"  , header : "Apartment Name"},
      {field : "boq_emi"  , header : "BOQ EMI "},
      {field : "developer_name"  , header : "Developer Name"},
      {field : "action" , header : "Action"}
    ]

    constructor(private ApartmentListingService : ApartmentListingService ) {}
    apartmentList: Apartment[] = [];
    ngOnInit(): void {
        this.ApartmentListingService.get().pipe(
          // tap( data => console.log("Api response", data)),
          map(response => response.data.data.map((item: any) => item.attributes as Apartment)),
          catchError(error => {
            return error
          })
        ).subscribe(
          data => {
            this.apartmentList = data
            console.log("apartmentList", this.apartmentList)
          }
        )
    }

    onButtonClick(rowData : any){
      console.log(`Button Clicked  ${rowData}`)
    }

  

   
}
