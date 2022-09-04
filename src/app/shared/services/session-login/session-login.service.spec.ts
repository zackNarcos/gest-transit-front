import { TestBed } from '@angular/core/testing';

import { SessionLoginService } from './session-login.service';

describe('SessionLoginService', () => {
  let service: SessionLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
