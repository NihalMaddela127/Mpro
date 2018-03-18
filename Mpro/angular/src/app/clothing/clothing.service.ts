import { Injectable } from '@angular/core';
import { schemaI } from '../common/models/schemacase';

@Injectable()
export class ClothingService {

  clothingItems : schemaI[] = [
    {
      name: 'Blazer',
      brand: 'Park Avenue',
      price: '400',
      img: 'assets/images/clothing/blazerblue-cloth-1.jpg'
    },
    {
      name: 'Kurta',
      brand: 'Manyavar',
      price: '300',
      img: 'assets/images/clothing/kurta-cloth-1.jpg'
    },
    {
      name: 'Suit',
      brand: 'Raymonds',
      price: '500',
      img: 'assets/images/clothing/suit-cloth-1.jpg'
    },
    {
      name: 'Waist Coat',
      brand: 'Jack & Jones',
      price: '400',
      img: 'assets/images/clothing/waistcoat-cloth-1.jpg'
    }
  ];

  constructor() { }

}
