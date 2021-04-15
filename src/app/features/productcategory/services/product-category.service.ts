import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  
  url:string = "http://localhost:8765/api/v1/products/category";

constructor(private http:HttpClient) { }

getProductsByCategory(category,subCategory){
  
  let params = new HttpParams().set("category",category).set("subCategory",subCategory);

  return this.http.get(this.url,{params:params});
}

}
