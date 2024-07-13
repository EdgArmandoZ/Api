import { TestBed } from '@angular/core/testing';

import { TequilaServiceService } from './tequila-service.service';

describe('TequilaServiceService', () => {
  let service: TequilaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TequilaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
