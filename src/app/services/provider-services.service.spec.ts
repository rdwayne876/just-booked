import { TestBed } from '@angular/core/testing';

import { ProviderServicesService } from './provider-services.service';

describe('ProviderServicesService', () => {
  let service: ProviderServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
