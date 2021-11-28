import { TestBed } from '@angular/core/testing';

import { VerifyIsAuthenticatedGuard } from './verify-is-authenticated.guard';

describe('VerifyIsAuthenticatedGuard', () => {
  let guard: VerifyIsAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyIsAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
