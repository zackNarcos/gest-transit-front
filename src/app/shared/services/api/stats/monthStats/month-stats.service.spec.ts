import { TestBed } from '@angular/core/testing';

import { MonthStatsService } from './month-stats.service';

describe('MonthStatsService', () => {
  let service: MonthStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
