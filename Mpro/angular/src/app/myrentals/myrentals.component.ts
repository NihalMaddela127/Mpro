import { Component, OnInit } from '@angular/core';
import { schemaI } from '../common/models/schemacase';
import { RentnowService } from '../rentnow/rentnow.service';

@Component({
  selector: 'app-myrentals',
  templateUrl: './myrentals.component.html',
  styleUrls: ['./myrentals.component.css']
})
export class MyrentalsComponent implements OnInit {
  myRentalItems : schemaI[] = [];
  
  constructor(private rentNowService : RentnowService){
    this.myRentalItems = this.rentNowService.rentItems;
  }

  ngOnInit() {
  }

}
