import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
 
  loginFormOpened:boolean=true;
  signupFormOpened:boolean=false;

  loginForm:FormGroup | any;
  signupForm:FormGroup | any;

  ngOnInit(): void {
   this.loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('')
   })

   this.signupForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('')
   })
  }

  openSignupForm(){
    this.signupFormOpened=true;
    this.loginFormOpened=!this.signupFormOpened
  }
  openloginForm(){
    this.loginFormOpened=true;
    this.signupFormOpened=!this.loginFormOpened
  }

  createAccount(){
    console.log(this.signupForm?.value)
  }

  login(){
    if(!this.loginForm.invalid){
      console.log(this.loginForm?.value)
    }
    else{
      console.log("wrong ")
    }
    
  }
}
