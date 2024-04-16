import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post('http://localhost:3000/api/user/login',model);
  }
  signup(model:any){
    return this.http.post('http://localhost:3000/api/user/signup',model);
  }
}
