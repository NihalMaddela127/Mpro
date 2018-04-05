import { Injectable } from '@angular/core';
import { userI } from '../common/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  userData : userI[];

  constructor(private http: HttpClient) { }

  auth(userID){
    return this.http.get('http://localhost:3000/user', userID);
  }

  save(regUser){
    return this.http.post('http://localhost:3000/user', regUser);
  }

}
