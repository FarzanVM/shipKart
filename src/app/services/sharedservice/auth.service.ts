import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private isAuthenticated:boolean=false;
  // private token = new BehaviorSubject(localStorage.getItem('token'));
  private isAuthenticated=new BehaviorSubject(false);
  public redirectUrl:string='';

  constructor() {
    const token = localStorage.getItem('token')
    if(token){
      this.isAuthenticated.next(true)
    }
    } 
   
   watchStorage():Observable<any>{
    return this.isAuthenticated.asObservable();
   }
   
   isAuthenticatedUser(){
    return this.isAuthenticated.value;
   }

   authenticateUser(){
    this.isAuthenticated.next(true)
    console.log(this.isAuthenticated.value)
   }

   deauthenticateuser(){
    this.isAuthenticated.next(false)
   }
}
