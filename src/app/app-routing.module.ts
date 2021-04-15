import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductThumbnailCardComponent } from '@shared/components/product-thumbnail-card/product-thumbnail-card.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { ProductcategoryComponent } from './features/productcategory/productcategory.component';

const routes: Routes = [
 {path:':category/:subCategory',component:ProductcategoryComponent},
 {path:':category/:subCategory/:productId',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
