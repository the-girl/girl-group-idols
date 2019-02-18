import { TestBed } from '@angular/core/testing';

import { IdolService } from './idol.service';

describe('IdolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdolService = TestBed.get(IdolService);
    expect(service).toBeTruthy();
  });
});
