import { TestBed } from '@angular/core/testing';

import { VerifyAuthStatusGuard } from './verify-auth-status.guard';

describe('VerifyAuthStatusGuard', () => {
  let guard: VerifyAuthStatusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyAuthStatusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
