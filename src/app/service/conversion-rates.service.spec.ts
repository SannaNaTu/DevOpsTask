import { TestBed } from '@angular/core/testing';

import { ConversionRates.ServiceService } from './conversion-rates.service.service';

describe('ConversionRates.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversionRates.ServiceService = TestBed.get(ConversionRates.ServiceService);
    expect(service).toBeTruthy();
  });
});
