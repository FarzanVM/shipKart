import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post('http://localhost:3000/api/user/login',model)
    // .pipe(map(res=>res),catchError((error:HttpErrorResponse):any=>{
    //   console.log("error",error)
    // }));
  }
  signup(model:any){
    return this.http.post('http://localhost:3000/api/user/signup',model);
  }

  getUser(username:String){
    return this.http.get('http://localhost:3000/api/user/getuser/'+username);
  }

  updateUser(model:any){
    return this.http.put('http://localhost:3000/api/user/updateuser',model);
  }
}
