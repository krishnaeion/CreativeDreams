import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { isPlatformBrowser } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class SubjectService {
private toggleDat = new BehaviorSubject<boolean>(false);
private storageSubject:BehaviorSubject<any>;
toggleDatOb = this.toggleDat.asObservable();// prevent memory leak
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
const initial={id:1,
  name:'morgan'
}
this.storageSubject=new BehaviorSubject<any>(initial);
   }
  globalToggle(){
   this.toggleDat.next(!this.toggleDat);
   return this.toggleDatOb
  }
  
  setItem(key:string,value:any):void{
    console.log("outside")
    if (isPlatformBrowser(this.platformId)) {
      console.log("inside")
    const decryptValue='v8vJ92^zF1!mL0qB@W#nT7xYk4uR3pE'
    const encryptedItem=CryptoJS.AES.encrypt(JSON.stringify(value),decryptValue).toString();
    sessionStorage.setItem(key,encryptedItem);
    this.storageSubject.next(value)
    }
    
  }
  getItem(key:string){
    if (isPlatformBrowser(this.platformId)) {
    const encryptedItem=sessionStorage.getItem(key);
    const currentValue=this.decryptData(encryptedItem);
    console.log(currentValue)
    this.storageSubject.next(currentValue);
    return this.storageSubject.asObservable()
    }
    return of(null)
  }
  private decryptData(encryptedData:string| null):any{
    console.log(encryptedData)
if(!encryptedData){return null}
const decryptValue='v8vJ92^zF1!mL0qB@W#nT7xYk4uR3pE'
const bytes=CryptoJS.AES.decrypt(encryptedData,decryptValue);
const decryptData=JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  return decryptData;
  }
}

