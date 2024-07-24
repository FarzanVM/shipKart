import { Component, OnInit } from '@angular/core';
import { ProductUpdateService } from '../../../services/sharedservice/product-update.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/productservice/product.service';
import { ToastrService } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-updateproduct',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.scss'
})
export class UpdateproductComponent implements OnInit{
  product:any;
  productForm:FormGroup | any;
  url:string|any;

  facaretright = faCaretRight;

  constructor(private productupdateservice:ProductUpdateService,private productservice:ProductService,private toastrservice:ToastrService){}

  ngOnInit(): void {
    this.product = this.productupdateservice.product;
    console.log(this.product)
    this.url =this.product.productimg
    this.productForm=new FormGroup({
      _id:new FormControl(this.product._id),
      productname:new FormControl(this.product.productname,Validators.required),
      productcategory:new FormControl(this.product.productcategory,Validators.required),
      productdesc:new FormControl(this.product.productdesc,Validators.required),
      productprice:new FormControl<number>(this.product.productprice,Validators.required),
      productdiscount:new FormControl<number>(this.product.productdiscount,Validators.required),
      productnewprice:new FormControl<number>(this.product.productnewprice,Validators.required),
      productquantity:new FormControl(this.product.productquantity,Validators.required),
      productimg:new FormControl(this.product.productimg,Validators.required)
    })

    this.productForm.controls.productdiscount.valueChanges.subscribe(()=>{
      console.log("changes")
      const orgPrice= this.productForm.controls.productprice?.value;
      const discount= this.productForm.controls.productdiscount?.value;
      if(orgPrice!=null && discount!=null){
        const discountprice:number= (orgPrice*discount)/100 
        this.productForm.patchValue({productnewprice:orgPrice-discountprice})
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
  updateProduct(){
    console.log("updated product",this.productForm.value)
    this.productservice.updateProduct(this.productForm.value).subscribe((res:any)=>{
      this.toastrservice.success(res.message)
    },
  (error)=>{
    this.toastrservice.error(error.error.message)
  })
  }

}
