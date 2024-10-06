import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  signup(model:any){
    return this.http.post('http://localhost:3000/api/admin/signup',model);
  }

  login(model:any){
    return this.http.post('http://localhost:3000/api/admin/login',model);
  }
}
