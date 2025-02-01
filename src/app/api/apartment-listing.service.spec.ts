import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApartmentListingService } from './apartment-listing.service';

describe('ApartmentListingService', () => {
  let service: ApartmentListingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApartmentListingService]
    });
    service = TestBed.inject(ApartmentListingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch apartment listings', () => {
    const dummyListings = [
      { id: 1, name: 'Apartment 1' },
      { id: 2, name: 'Apartment 2' }
    ];

    service.get().subscribe(listings => {
      expect(listings.length).toBe(2);
      expect(listings).toEqual(dummyListings);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/v1/apartments?page=1&city=&search=&per_page=6&lifestage=&theme=&vr_link=false`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyListings);
  });
});
