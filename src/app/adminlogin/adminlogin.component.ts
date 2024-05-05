import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/adminservice/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.scss'
})
export class AdminloginComponent implements OnInit{
  constructor(private adminservice:AdminService,private router:Router,private toastrservice:ToastrService){

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
    password:new FormControl('',Validators.required),
    storename:new FormControl('',Validators.required)
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
      this.adminservice.signup(this.signupForm.value).subscribe((res:any)=>{
        this.toastrservice.success(res.message)
        this.signupForm.reset()
      },
    error=>{
      this.toastrservice.error(error.error.message)
      this.signupForm.reset()
    })
      console.log(this.signupForm.value)
    }
  }

  login(){
    this.submitted=true
    if(this.loginForm.invalid){
      
    }
    else{
      this.adminservice.login(this.loginForm.value).subscribe((res:any)=>{
        this.toastrservice.success(res.message)
        localStorage.setItem('token',res['token'])
        localStorage.setItem('storename',res['storename'])
        const t=localStorage.getItem('token');
        this.router.navigateByUrl('/admin')
      },
    error=>{
      this.toastrservice.error(error.error.message)
    })
      // console.log(this.loginForm.value)
    }
    
  }
}
