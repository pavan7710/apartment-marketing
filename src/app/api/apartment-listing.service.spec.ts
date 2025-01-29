import { TestBed } from '@angular/core/testing';

import { ApartmentListingService } from './apartment-listing.service';

describe('ApartmentListingService', () => {
  let service: ApartmentListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
