import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../shareSubject/subject.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Reciever2Component } from '../reciever2/reciever2.component';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,Reciever2Component],
  templateUrl: './source.component.html',
  styleUrl: './source.component.css'
})
export class SourceComponent implements OnInit {


  constructor(private storageService:SubjectService){

  }

  ownerData:any=[
    {
      id:1,
      name:'krishna'
    },
    {
      id:2,
      name:'Rishikesh'
    },
    {
      id:3,
      name:'Harshit'
    },
    {
      id:4,
      name:'Eshwar'
    }
  ]
ngOnInit(): void {
  
}


setData(dat:any){
  console.log(dat)
  console.log("ji")
this.storageService.setItem('owner',dat);
  console.log(dat)
}

}
