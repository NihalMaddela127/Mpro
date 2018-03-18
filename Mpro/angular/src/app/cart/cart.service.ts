import { Injectable } from '@angular/core';
import { schemaI } from '../common/models/schemacase';

@Injectable()
export class CartService {
  cartItems : schemaI[] = [];

  constructor() { }

  addItems(item){
    this.cartItems.push(item);
    console.log(this.cartItems);
  }

}
