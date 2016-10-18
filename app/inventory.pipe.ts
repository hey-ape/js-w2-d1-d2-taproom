import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "inventory",
  pure: false
})
export class InventoryPipe implements PipeTransform {
  transform(input: Keg[], desiredInventory, desiredType) {
    var output: Keg[] = [];
    if(desiredInventory === "all"){
      for(var i=0; i < input.length; i++) {
        if((input[i].type === desiredType  || desiredType === "all")) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredInventory === "low") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].pints < 10 && (input[i].type === desiredType || desiredType === "all")) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInventory === "normal") {
      for(var i=0; i < input.length; i++) {
        if(input[i].pints >= 10 && (input[i].type === desiredType  || desiredType === "all")) {
          output.push(input[i]);
        }
      }
      return output;
    // } else if(desiredInventory === "all"){
    //   for(var i=0; i < input.length; i++) {
    //     if((input[i].type === desiredType  || desiredType === "all")) {
    //       output.push(input[i]);
    //     }
    //   }
      // return output;
    }
  }
}
