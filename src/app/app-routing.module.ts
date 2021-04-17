import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductThumbnailCardComponent } from '@shared/components/product-thumbnail-card/product-thumbnail-card.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { RoleGuardService } from './auth/services/role-guard.service';
import { CartComponent } from './features/cart/cart.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { ProductcategoryComponent } from './features/productcategory/productcategory.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'cart',component:CartComponent},
 {path:':category/:subCategory',component:ProductcategoryComponent,
  canActivate:[RoleGuardService],
  data:{
    expectedRole:'ROLE_CUSTOMER'
  }
},
 {path:':category/:subCategory/:productId',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
