import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from '../electronics/electronics.service';
import { ClothingService } from '../clothing/clothing.service';
import { AutomobilesService } from '../automobiles/automobiles.service';
import { schemaI } from '../common/models/schemacase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allInOneItems : schemaI[] = [];
  electronicItems : schemaI[] = [];
  automobileItems : schemaI[] = [];
  clothingItems : schemaI[] = [];

  constructor (
    private elecService : ElectronicsService,
    private clothService : ClothingService,
    private amService: AutomobilesService ) {
    
    this.automobileItems = this.amService.automobileItems;
    this.clothingItems = this.clothService.clothingItems;
    this.electronicItems = this.elecService.electronicItems;
    this.allInOneItems.concat(this.electronicItems, this.clothingItems, this.automobileItems);
    console.log(this.allInOneItems);
  }

  ngOnInit() {
  }

}
