import { TestBed } from '@angular/core/testing';

import { ColisService } from './colis.service';

describe('ColisService', () => {
  let service: ColisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
