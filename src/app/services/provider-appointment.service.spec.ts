import { TestBed } from '@angular/core/testing';

import { ProviderAppointmentService } from './provider-appointment.service';

describe('ProviderAppointmentService', () => {
  let service: ProviderAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
