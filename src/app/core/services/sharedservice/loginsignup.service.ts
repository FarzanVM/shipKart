import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginsignupService {
  private formtype =new BehaviorSubject<string>('login')

  constructor() { }

  setFormType(val:string){
    this.formtype.next(val)
  }
  getFormType(){
    return this.formtype.asObservable();
  }
}
