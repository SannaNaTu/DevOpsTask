import {Pipe, PipeTransform} from '@angular/core';
import {FinnkinoComponent} from '../finnkino/finnkino.component';

@Pipe({
  name: 'finnkino'
})
export class FinnkinoPipe implements PipeTransform {

  transform(items: any, searchText?: string): any {
    // ! on ei

    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter(item => (item.Title.toLowerCase().includes(searchText.toLowerCase())));


  }


}
