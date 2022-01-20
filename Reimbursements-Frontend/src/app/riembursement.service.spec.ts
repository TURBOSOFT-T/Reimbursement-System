import { TestBed } from '@angular/core/testing';

import { RiembursementService } from './riembursement.service';

describe('RiembursementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiembursementService = TestBed.get(RiembursementService);
    expect(service).toBeTruthy();
  });
});
