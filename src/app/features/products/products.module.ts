import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';



@NgModule({
  declarations: [ProductsCategoryComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductsCategoryComponent]
})
export class ProductsModule { }
