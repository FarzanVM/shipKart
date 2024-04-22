import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserService } from '../services/userservice/user.service';
import { Router } from '@angular/router';
import { LoginsignupService } from '../services/sharedservice/loginsignup.service';
import { AuthService } from '../services/sharedservice/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
 
  constructor(private userservice:UserService,private router:Router,private loginsignupservice:LoginsignupService,private authservice:AuthService){

  }

  
  loginFormOpened:boolean=true;
  signupFormOpened:boolean=false;
  submitted:boolean=false;

  loginForm:FormGroup | any;
  signupForm:FormGroup | any;

  ngOnInit(): void {
   this.loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
   })

   this.signupForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
   })

   this.loginsignupservice.getFormType().subscribe(type =>{
    if(type=='signup'){
      this.loginFormOpened=false;
      this.signupFormOpened=true;
    }
   })
  
  }

  openSignupForm(){
    this.loginForm.reset()
    this.signupFormOpened=true;
    this.submitted=false;
    this.loginFormOpened=!this.signupFormOpened
  }
  openloginForm(){
    this.signupForm.reset()
    this.loginFormOpened=true;
    this.submitted=false;
    this.signupFormOpened=!this.loginFormOpened
  }

  createAccount(){
    this.submitted=true
    if(this.signupForm.invalid){
      console.log("error")
    }
    else{
      this.userservice.signup(this.signupForm.value).subscribe((data)=>{
        console.log(data)
        this.router.navigateByUrl('/allproduct')
      },
    error=>{
      console.log(error)
    })
      console.log(this.signupForm.value)
    }
  }

  login(){
    this.submitted=true
    if(this.loginForm.invalid){
      console
    }
    else{
      this.userservice.login(this.loginForm.value).subscribe((data:any)=>{
        console.log(data)
        const token = data.token
        localStorage.setItem('token',token)
        this.authservice.authenticateUser();
        this.router.navigateByUrl('/allproduct')
      },
    error=>{
      console.log(error)
    })
      // console.log(this.loginForm.value)
    }
    
  }
}
