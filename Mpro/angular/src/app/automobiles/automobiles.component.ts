import { Component, OnInit } from '@angular/core';
import { SearchPipe } from '../common/pipes/search.pipe';
import { schemaI } from '../common/models/schemacase';
import { AutomobilesService } from '../automobiles/automobiles.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.component.html',
  styleUrls: ['./automobiles.component.css']
})
export class AutomobilesComponent implements OnInit {
  cartItems : string[];
  automobileItems : schemaI[] = [];
  
    constructor(private service : AutomobilesService, private cartService : CartService) {
      this.automobileItems = this.automobileItem();
    }

  ngOnInit() {
  }

  automobileItem(){
    return this.service.automobileItems;
  }

  addToCart(searchItem){
    this.cartItems = searchItem;
    this.cartService.addItems(searchItem);
  }

}
