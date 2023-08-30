import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cart from 'src/app/Models/cart.model';
import { ShareService } from 'src/app/Services/share.service';
import {MatIconModule} from '@angular/material/icon';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Product } from 'src/app/Models/Product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Editform = new FormGroup({
    quantity: new FormControl('', Validators.required),});
    submitted=false;
  get quantity() {
    return this.Editform.get('quantity');
  }
  public Cart:Cart[];
  readonly APIUrl ="https://localhost:44339"
  constructor(private fs: FooterService, private nav :NavbarServiceService,private shared:ShareService ,public http :HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful;
    this.fs.show();
    this.fs.doSomethingElseUseful();
    this.refreshCartList();
  }
  isActive = true;
  refreshCartList(){
  this.shared.GetAllCart().subscribe(data=>{
    this.Cart=data;
    console.log(this.Cart)
  });

  }
  DeleteCart(id:number){
    if(confirm('Are you sure?')){
      this.shared.DeleteFromCart(id).subscribe(data=>{
        console.log(data);
      });
      location.reload();
    }
}
onSubmit() {
  this.submitted = true;
  if (this.Editform.invalid) {
    return;
}
this.shared.UpdateCart(this.Editform.value).subscribe((result)=>{

});
}

   incrementQuantity(cartId:number){
    this.Cart = this.Cart.map((Cart:Cart) => {
      if (Cart.cartId === cartId) {
        return {
          ...Cart,
          quantity: Cart.quantity + 1, 
        };
      }
      return Cart;
    });
  }

  decrementQuantity(cartId:number){
    this.Cart = this.Cart.map((Cart:Cart) => {
      if (Cart.cartId === cartId) {
        return {
          ...Cart,
         quantity: Cart.quantity > 1 ? Cart.quantity - 1 : 1
        };
      }
      return Cart;
    });  
  }
  public grandTotal():number{
    let total : number = 0;
    for(let cart of this.Cart){
      total+= cart.quantity* cart.price;
    }
    return total;
  }
  
addOrder(Cart:Cart){
  console.log(Cart);
  this.shared.addOrderDetails(this.Cart).subscribe(res=>{

  });
  alert('Order successful!');
  this.router.navigate(['order']);
}

}

// incrementQuantity(cartId:number){
//   this.Cart = this.Cart.map((Cart:Cart) => {
//     if (Cart.cartId === cartId) {
//       // Cart.quantity=Cart.quantity+1;
//       // console.log(Cart);
//       //this.UpdateCart(Cart.cartId);
//       return {
//         ...Cart,
//         quantity: Cart.quantity + 1,
        
//       };

//     }
//     return Cart;
//   });
// }
//  UpdateCart(cartId:number){
//    return this.http.put(this.APIUrl+'/api/Cart/UpdateCart',cartId)
//  }