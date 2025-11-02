import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { LoginForm } from '../../models/interfaces/loginform.interface';
import { environment } from '../../../../environments/environment.development';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(model:LoginForm){
    return this.http.post(environment.user_api+APIConstant.user.login,model)
    // .pipe(map(res=>res),catchError((error:HttpErrorResponse):any=>{
    //   console.log("error",error)
    // }));
  }
  signup(model:LoginForm){
    return this.http.post(environment.user_api+APIConstant.user.signup,model);
  }

  getUser(userId:String){
    console.log("getUser api call made")
    return this.http.get(environment.user_api+APIConstant.user.getUser+userId);
  }

  updateUser(model:any){
    return this.http.put(environment.user_api+APIConstant.user.updateUser,model);
  }
}
