
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent implements OnInit{
 
  url:any;
  invalidForm:boolean=true;
  productForm=new FormGroup({
    productname:new FormControl('',Validators.required),
    productcategory:new FormControl('',Validators.required),
    productdesc:new FormControl('',Validators.required),
    productprice:new FormControl<number>(0,Validators.required),
    productdiscount:new FormControl<number>(0,Validators.required),
    productnewprice:new FormControl<number>(0,Validators.required),
    productquantity:new FormControl('',Validators.required),
    productimg:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.productForm.controls.productdiscount.valueChanges.subscribe(()=>{
      console.log("changes")
      const orgPrice= this.productForm.controls.productprice?.value;
      const discount= this.productForm.controls.productdiscount?.value;
      if(orgPrice!=null && discount!=null){
        const discountprice:number= (orgPrice*discount)/100 
        this.productForm.patchValue({productnewprice:orgPrice-discountprice})
      }
    })
    this.productForm.valueChanges.subscribe(()=>{
      if(!this.productForm.invalid){
        this.invalidForm=false;
      }
    })
    
  }


  getImage(event:any){
    const files = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(files[0])
   reader.onload=()=>{
      this.url = reader.result
      this.productForm.patchValue({productimg:this.url})
    } 
  }

  addProduct(){
    console.log(this.productForm.value)
  }

}
