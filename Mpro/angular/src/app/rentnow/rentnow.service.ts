import { Injectable } from '@angular/core';
import { schemaI } from '../common/models/schemacase';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RentnowService {
  rentItems : schemaI[] = [];

  constructor(private http: HttpClient) {}

  rentNow(rentals){
    this.rentItems = rentals;
    // console.log(rentals);
    return this.http.post('http://localhost:3000/api/storeRentals', rentals);
  }

  getRentals(){
    return this.http.get<schemaI[]>('http://localhost:3000/api/rentals');
  }

}
