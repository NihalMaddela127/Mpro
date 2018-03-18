import { Component, OnInit } from '@angular/core';
import { schemaI } from '../common/models/schemacase';
import { RentnowService } from './rentnow.service';

@Component({
  selector: 'app-rentnow',
  templateUrl: './rentnow.component.html',
  styleUrls: ['./rentnow.component.css']
})
export class RentnowComponent implements OnInit {
  rentItems : schemaI[] = [];

  constructor(private rentNowService : RentnowService) {
    this.rentItems = this.rentNowService.rentItems;
  }

  ngOnInit() {
  }

}
