import {  inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/sharedservice/auth.service';



export const authGuard: CanActivateFn = (route, state) => {
  const authservice = inject(AuthService)
  const router = inject(Router)
  if(authservice.isAuthenticatedUser()){
    return true
  }
  else{
    router.navigate(['login'])
    return false
  }
};
