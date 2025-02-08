import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]',
})
export class NumericOnlyDirective {
  @Input() maxLimit?: number =Number.MAX_VALUE;
  @Input() minValue?: number =0;
  @Input() allowDecimal?: boolean =true;


  private decimalNumberRegex:RegExp=new RegExp(/^-?\d+(\.\d{0,3})?$/g);
  private wholeNumberRegex:RegExp=new RegExp(/^-?\d+$/)
  private specialKeys:Array<string> =['Backspace','Tab','End','Home','ArrowLeft','ArrowRight']

  constructor(private el:ElementRef) {

   }

   @HostListener('keydown',['event'])
   onKeyDown(event:KeyboardEvent){
    if(this.minValue?.toString()[0]==="-"){
this.specialKeys.push("-")  
    }

    if(this.specialKeys.indexOf(event.key)!== -1){
      return;
    }
    let current:string =this.el.nativeElement.value;
    const next:string =current.concat(event.key);
    const regex=this.allowDecimal?this.decimalNumberRegex :this.wholeNumberRegex;
    if(next && !String(next).match(regex)){
      event.preventDefault();
    }


   
   }

   @HostListener('input',['event'])
   onInput(event:Event){
    const input= event.target as HTMLInputElement;
    const value = parseFloat(input.value)
   
    if(this.maxLimit!==undefined && value > this.maxLimit){
      input.value=input.value.slice(0,-1);
    }
    if(this.minValue!==undefined && value < this.minValue){
      input.value=input.value.slice(0,-1)
    }
   }

}
