import { Component, OnInit } from '@angular/core';
import { Cart } from '@core/models/cart';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Cart;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe((res:Cart)=>{
      this.cart=res;
      console.log(this.cart);
    });
  
    
  }

  onClickDeleteItem(item){
    this.cartService.deleteItem(item).subscribe((res)=>{
      this.cart.id = res["id"];
      this.cart.userId = res["userId"];
      this.cart.items = res["items"];
      this.cart.totalPrice = res["totalPrice"];
      this.cart.totalSavingsAmount = res["totalSavingsAmount"];
      console.log(this.cart);
    });
  }

}
