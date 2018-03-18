import { Pipe, PipeTransform } from '@angular/core';
import { schemaI } from '../models/schemacase';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(items:any, searchby:string): any {
    if(!searchby)
      return items;
    
    return items.filter(function(itemfiltered){
      return itemfiltered.name.toLowerCase().indexOf(searchby.toLowerCase())>-1 ||
      itemfiltered.brand.toLowerCase().indexOf(searchby.toLowerCase())>-1;
      ;
    })
  }

}
