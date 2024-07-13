import { TestBed } from '@angular/core/testing';

import { MargaritaServiceService } from './margarita-service.service';

describe('MargaritaServiceService', () => {
  let service: MargaritaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MargaritaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
