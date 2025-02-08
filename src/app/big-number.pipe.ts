import { Pipe, PipeTransform } from '@angular/core';
import BigNumber from 'bignumber.js'

@Pipe({
  name: 'bigNumber',
  standalone: true
})
export class BigNumberPipe implements PipeTransform {

  transform(value: any,args?: any): any {
    let bigNum=new BigNumber(value?.toString());
if(bigNum?.isNaN()){
  return value;
}else{
  return bigNum.toFixed();
}
  }

}
