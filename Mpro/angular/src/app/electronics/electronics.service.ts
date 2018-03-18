import { Injectable } from '@angular/core';
import { schemaI } from '../common/models/schemacase';

@Injectable()
export class ElectronicsService {
  electronicItems : schemaI[] = [
    {
      name: 'Iphone',
      brand: 'Apple',
      price: '1000',
      img: 'assets/images/electronics/iphone-elec-1.jpg'
    },
    {
      name: 'Smart TV',
      brand: 'Samsung',
      price: '500',
      img: 'assets/images/electronics/samsung-elec-1.jpg'
    },
    {
      name: 'Laptop',
      brand: 'Hp',
      price: '800',
      img: 'assets/images/electronics/hplaptop-elec-1.jpeg'
    },
    {
      name: 'Play Station',
      brand: 'Sony',
      price: '600',
      img: 'assets/images/electronics/playstation-elec-1.jpg'
    }
  ];

  constructor() { }

}
