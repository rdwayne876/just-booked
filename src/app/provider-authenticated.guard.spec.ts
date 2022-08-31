import { TestBed } from '@angular/core/testing';

import { ProviderAuthenticatedGuard } from './provider-authenticated.guard';

describe('ProviderAuthenticatedGuard', () => {
  let guard: ProviderAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProviderAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
