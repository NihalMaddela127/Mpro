import { Injectable } from '@angular/core';
import { schemaI } from '../common/models/schemacase';

@Injectable()
export class AutomobilesService {
  
  automobileItems : schemaI[] = [
    {
      name: 'Audi R8',
      brand: 'Audi',
      price: '45000',
      img: 'assets/images/automobiles/audir8-am-1.jpg'
    },
    {
      name: 'Mercedez Benz',
      brand: 'Mercedez',
      price: '75000',
      img: 'assets/images/automobiles/benz-am-1.gif'
    },
    {
      name: 'Ciaz',
      brand: 'Maruti Suzuki',
      price: '8000',
      img: 'assets/images/automobiles/ciaz-am-1.jpg'
    },
    {
      name: 'KUv 1oo',
      brand: 'Mahindra',
      price: '8000',
      img: 'assets/images/automobiles/kuv100-am-1.jpg'
    }
  ];
  
  constructor() { }

}
