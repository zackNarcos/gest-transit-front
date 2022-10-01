import { TestBed } from '@angular/core/testing';

import { ReliquatService } from './reliquat.service';

describe('ColisService', () => {
  let service: ReliquatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReliquatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
