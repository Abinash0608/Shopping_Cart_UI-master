import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ProductComponent } from './Component/product/product.component';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareService } from './Services/share.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './Component/cart/cart.component';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AdminLandingPageComponent } from './Component/admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './Component/user-landing-page/user-landing-page.component';
import { ErrorComponent } from './Component/error/error.component';
import { OrderComponent } from './Component/order/order.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { AllfeedbacksComponent } from './Component/allfeedbacks/allfeedbacks.component';
import { ShowProductComponent } from './Component/admin-landing-page/show-product/show-product.component';
import { AddProductComponent } from './Component/admin-landing-page/add-product/add-product.component';
import { EditProductComponent } from './Component/admin-landing-page/edit-product/edit-product.component';
import { AddEditProductsComponent } from './Component/admin-landing-page/add-edit-products/add-edit-products.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { OrderSuccessfulComponent } from './Component/order-successful/order-successful.component';
import { AuthGuard } from './Services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    ErrorComponent,
    OrderComponent,
    FeedbackComponent,
    AllfeedbacksComponent,
    ShowProductComponent,
    AddProductComponent,
    EditProductComponent,
    AddEditProductsComponent,
    PaymentComponent,
    OrderSuccessfulComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    [FormsModule,ReactiveFormsModule],
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path:'payment',component:PaymentComponent,canActivate: [AuthGuard]},
      {path:'order-successful',component:OrderSuccessfulComponent,canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'products', component: ProductComponent},
      {path: 'cart', component:CartComponent,canActivate: [AuthGuard]},
      {path: 'login/user', component:UserLandingPageComponent,canActivate: [AuthGuard]},
      {path: 'login/admin', component:AdminLandingPageComponent,canActivate: [AuthGuard]},
      {path: 'order', component: OrderComponent,canActivate: [AuthGuard]},
      {path:'feedback',component:FeedbackComponent},
      {path:'allfeedbacks',component:AllfeedbacksComponent},
      {path:'edit-product',component:EditProductComponent,canActivate: [AuthGuard]},
      {path:'show-product',component:ShowProductComponent,canActivate: [AuthGuard]},
      {path:'add-edit-product',component:AddEditProductsComponent,canActivate: [AuthGuard]},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component:ErrorComponent,pathMatch:'full'}
    ]),
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ShareService ,AuthGuard],//providers: [AuthGuard]
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
