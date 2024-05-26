import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { CheckoutComponent } from '../homepage/checkout/checkout.component';

export const checkoutDeactivateGuard: CanDeactivateFn<any> = (component:CheckoutComponent, currentRoute:ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState:RouterStateSnapshot) => {
  return component.preventBackRoute()?true:false
};
