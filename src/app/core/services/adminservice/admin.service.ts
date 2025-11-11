import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  signup(model:any){
    return this.http.post(environment.admin_api+APIConstant.admin.signup,model);
  }

  login(model:any){
    return this.http.post(environment.admin_api+APIConstant.admin.login,model);
  }
}
