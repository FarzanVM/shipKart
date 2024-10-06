import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ReviewService } from '../../services/reviewservice/review.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,ReactiveFormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit{
  

  hoverrate=-1;
  selectedRate=-1;
  fastar = faStar;
  reviewForm=  new FormGroup({
    title:new FormControl(''),
    comment:new FormControl('',[Validators.required]),
    rating:new FormControl(0,[Validators.min(1)]),
    customername:new FormControl(''),
    date:new FormControl(new Date().toDateString())
  })

  constructor(private reviewservice:ReviewService,private toastrservice:ToastrService){}
  ngOnInit(): void {
   
  }

  showRate(index:any){
    this.hoverrate = index
  }
  setDefault(){
    if(this.hoverrate!== this.selectedRate){
      this.hoverrate=-1
    }
  }
  setRating(index:number){
    this.selectedRate=index
    this.hoverrate=index
    this.reviewForm.controls['rating'].patchValue(this.selectedRate+1)
  }

  submitReview(){
    if(this.reviewForm.invalid){
      this.reviewForm.markAllAsTouched();
      console.log("Something error")
    }
    else{
      console.log(this.reviewForm.value)
      const productId = localStorage.getItem('reviewproductId')
      const model = {
        product_id:productId,
        review:this.reviewForm.value
      }
      this.reviewservice.addReview(model).subscribe((res:any)=>{
        this.toastrservice.success(res.message)
      },
    (error)=>{
      this.toastrservice.error(error.error.message)
    })

    }
  }
}
