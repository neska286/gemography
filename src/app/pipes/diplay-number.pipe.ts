import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayNumber'
})
export class DiplayNumberPipe implements PipeTransform {

  transform(number: number, ...args: unknown[]): any{
     if (isNaN(number)) return null; // will only work value is a number
     if (number === null) return null;
     if (number === 0) return null;
     let abs = Math.abs(number);
     const rounder = Math.pow(10,1);
     const isNagative = number <0; // will work for negative number

     let key = '';
     const powers = [
       {key : 'M',value : Math.pow(10,6)},
       {key : 'K',value : 100},
       {key : 'k' , value : 1},
     

     ];
     for (let i = 0 ; i < powers.length; i++){
       let reduced = abs / powers[i].value;
       reduced = Math.round(reduced * rounder) / rounder;
       if(reduced >= 1){
         abs = reduced ;
         key = powers[i].key;
         break;
       } 
     }
     return(isNagative ? ' - ' : '') + abs + key;
  }

}
