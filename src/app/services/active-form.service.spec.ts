import { TestBed } from '@angular/core/testing';

import { ActiveFormService } from './active-form.service';

describe('ActiveFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveFormService = TestBed.get(ActiveFormService);
    expect(service).toBeTruthy();
  });
});
