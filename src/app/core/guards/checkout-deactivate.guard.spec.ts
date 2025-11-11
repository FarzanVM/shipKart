import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { checkoutDeactivateGuard } from './checkout-deactivate.guard';

describe('checkoutDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkoutDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
