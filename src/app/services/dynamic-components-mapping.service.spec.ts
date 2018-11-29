import { TestBed } from '@angular/core/testing';

import { DynamicComponentsMappingService } from './dynamic-components-mapping.service';

describe('DynamicComponentsMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicComponentsMappingService = TestBed.get(DynamicComponentsMappingService);
    expect(service).toBeTruthy();
  });
});
