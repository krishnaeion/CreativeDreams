import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../shareSubject/subject.service';
import { Subscription } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reciever1',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reciever1.component.html',
  styleUrl: './reciever1.component.css'
})
export class Reciever1Component implements OnInit {
  subscription:Subscription;
  owner:any={};
constructor(private storageService:SubjectService){

}
  ngOnInit(): void {
    this.fetchOwner();
  }
fetchOwner(){
 this.subscription= this.storageService.getItem('owner').subscribe((res:any)=>{
this.owner=res;
console.log(res)
 })
}
}
