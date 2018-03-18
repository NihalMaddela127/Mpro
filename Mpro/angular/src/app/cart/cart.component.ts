import { Component, OnInit } from '@angular/core';
import { schemaI } from '../common/models/schemacase';
import { CartService } from './cart.service';
import { RentnowService } from '../rentnow/rentnow.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : schemaI[] = [];
  rentItems : schemaI[] = [];
  numbers : any[] = [];
  
  constructor(private cartService : CartService, private rentService : RentnowService) {
    this.cartItems = this.cartService.cartItems;
    console.log(this.cartItems);
    this.numbers = Array(5).fill(0).map((x,i)=>i+1);
  }

  ngOnInit() {
  }

  cartNow(rentItems){
    this.rentService.rentNow(rentItems);
  }

}
