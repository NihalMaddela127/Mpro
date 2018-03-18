import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from './electronics.service';
import { schemaI } from '../common/models/schemacase';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  cartItems : string[];
  electronicItems : schemaI[] = [];

  constructor(private service: ElectronicsService, private cartService : CartService) {
    this.electronicItems = this.electronicItem();
  }

  ngOnInit() {
  }

  electronicItem(){
    return this.service.electronicItems;
  }

  addToCart(searchItem){
    this.cartItems = searchItem;
    this.cartService.addItems(searchItem);
  }
  
}
