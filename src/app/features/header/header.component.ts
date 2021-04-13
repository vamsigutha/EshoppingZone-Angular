import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapseShow = "hidden";
  isCollapsed = true;
  showSubMenu = {
    "Appliances": "hidden",
    "Arts, Crafts & Sewing": "hidden",
    "Automotive Parts & Accessories": "hidden",
    "Baby": "hidden",
    "Beauty & Personal Care": "hidden",
    "Cell Phones & Accessories": "hidden",
    "Women": "hidden",
    "Men": "hidden",
    "Girls": "hidden",
    "Boys": "hidden",
    "Computers": "hidden",
    "Electronics": "hidden",
    "Garden & Outdoor": "hidden",
    "Grocery & Gourmet Food": "hidden",
    "Health & Household": "hidden",
    "Home & Kitchen": "hidden",
    "Luggage & Travel Gear": "hidden",
    "Musical Instruments": "hidden",
    "Pet Supplies": "hidden",
    "Video Games": "hidden"
}
  isSubMenuOpen = false;

  categories:Observable<any>;


  constructor(private categorySerice:CategoryService) { }

  ngOnInit() {
    this.categories = this.categorySerice.getCategory();
  }



  toggleCollapseShow() {
    if(this.isCollapsed){
      this.collapseShow = 'bg-white';
    }else{
      this.collapseShow = 'hidden';
    }
    this.isCollapsed = !this.isCollapsed;
   
  }

  onClickMenu(id){

    if(this.showSubMenu[id]=="hidden"){
      this.showSubMenu[id]="px-5 m-3 flex flex-col space-y-2";
    }else{
      this.showSubMenu[id]="hidden";
    }  
    
    
  }



  onClickLoginButton(){

  }


  cart(){

  }

  search(e){

  }


}
