import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../shareSubject/subject.service';
import { Subscription } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NumericOnlyDirective } from '../numeric-only.directive';
import { BigNumberPipe } from '../big-number.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reciever2',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule, BigNumberPipe],
  templateUrl: './reciever2.component.html',
  styleUrl: './reciever2.component.css'
})
export class Reciever2Component implements OnInit {
  subscription:Subscription;
  owner:any={};
  bigNumberPipe=new BigNumberPipe()
  number:any=839292.3
constructor(private storageService:SubjectService){

}
  ngOnInit(): void {
    this.fetchOwner();
  }
fetchOwner(){
 this.subscription= this.storageService.getItem('owner').subscribe((res:any)=>{
this.owner=res;
 })
}
}
