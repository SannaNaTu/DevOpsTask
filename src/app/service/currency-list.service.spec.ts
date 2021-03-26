import { TestBed } from '@angular/core/testing';

import { CurrencyList.ServiceService } from './currency-list.service.service';

describe('CurrencyList.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyList.ServiceService = TestBed.get(CurrencyList.ServiceService);
    expect(service).toBeTruthy();
  });
});
