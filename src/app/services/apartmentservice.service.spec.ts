import { TestBed } from '@angular/core/testing';

import { ApartmentserviceService } from './apartmentservice.service';

describe('ApartmentserviceService', () => {
  let service: ApartmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
