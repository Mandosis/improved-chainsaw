import { TestBed, inject } from '@angular/core/testing';

import { ReemoHealthService } from './reemo-health.service';

describe('ReemoHealthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReemoHealthService]
    });
  });

  it('should ...', inject([ReemoHealthService], (service: ReemoHealthService) => {
    expect(service).toBeTruthy();
  }));
});
