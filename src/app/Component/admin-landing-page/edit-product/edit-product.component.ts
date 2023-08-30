import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product.model';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import { ShareService } from 'src/app/Services/share.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public products:Product[];
  ProductForm = new FormGroup({
    //productId: new FormControl(''),
    category:new FormControl('',Validators.required),
    productName : new FormControl('', Validators.required),
    price : new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    productImage : new FormControl('',Validators.required) 
  });
  submitted=false;

get category(){
  return this.ProductForm.get('category');
}
  get productName() {
    return this.ProductForm.get('productName');
  }
  get price() {
    return this.ProductForm.get('price');
  }
  get description(){
    return this.ProductForm.get('description');
  }
  get productImage() {
    return this.ProductForm.get('productImage');
  }
  
  
  constructor( public shared:ShareService,public nav:NavbarServiceService,public fs:FooterService,private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.fs.show();
  }
  AddProduct(){
    this.submitted = true;
     if (this.ProductForm.invalid) {
       return;

      }
     this.shared.Addproduct(this.ProductForm.value).subscribe((result)=>{
      alert("Product Added Successfully");
      console.log(this.ProductForm.value);
    });
    
    this.ProductForm.reset();
    this.router.navigate(['login/admin']);
  
  }

}
