import { Injectable } from '@angular/core';
import { schemaI } from '../common/models/schemacase';

@Injectable()
export class RentnowService {
  rentItems : schemaI[] = [];

  constructor() {}

  rentNow(rentals){
    this.rentItems = rentals;
  }

}
