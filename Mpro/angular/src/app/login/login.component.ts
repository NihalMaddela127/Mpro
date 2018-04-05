import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : Iuser = new Iuser();
  
  constructor(private authService: LoginService) { }

  ngOnInit() {
  }
  auth(formData : NgForm){
    this.authService.auth(formData.value.userName).subscribe(res =>
      window.prompt('Login successfull'),
      err => window.prompt('Login failed')
    )
  }
}

export class Iuser{
  userName: string;
  Password: string;
}