
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/productservice/product.service';
import { min } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent implements OnInit{
 
  constructor(private productservice:ProductService){}
  url:any;
  invalidForm:boolean=true;
  productForm=new FormGroup({
    productname:new FormControl('',Validators.required),
    productcategory:new FormControl('',Validators.required),
    productdesc:new FormControl('',Validators.required),
    productprice:new FormControl<number>(0,[Validators.required,Validators.min(0)]),
    productdiscount:new FormControl<number>(0,[Validators.required,Validators.max(100),Validators.min(0)]),
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
      else{
        this.invalidForm=true;
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
    
    let storename = localStorage.getItem('storename');
    const product = {...this.productForm.value,
      storename:storename
    }
    console.log(product)
    this.productservice.addProduct(product).subscribe(res=>{
      console.log(res)
    })
  }

}
