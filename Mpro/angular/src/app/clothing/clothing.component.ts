import { Component, OnInit } from '@angular/core';
import { ClothingService } from './clothing.service';
import { schemaI } from '../common/models/schemacase'
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  cartItems : string[];
  clothingItems : schemaI[] = [];
  
  constructor(private service : ClothingService, private cartService : CartService) {
    this.clothingItems = this.clothingItem();
  }

  ngOnInit() {
  }

  clothingItem(){
    return this.service.clothingItems;;
  }

  addToCart(searchItem){
    this.cartItems = searchItem;
    this.cartService.addItems(searchItem);
  }

}
