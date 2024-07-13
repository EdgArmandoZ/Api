import { TestBed } from '@angular/core/testing';

import { VodkaServiceService } from './vodka-service.service';

describe('VodkaServiceService', () => {
  let service: VodkaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VodkaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
