import { TestBed } from '@angular/core/testing';

import { LsnsServiceService } from './lsns-service.service';

describe('LsnsServiceService', () => {
  let service: LsnsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LsnsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
