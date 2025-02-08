import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { of, Observable, map, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class DashboardService {
  beh= new BehaviorSubject(behaviour =>{

 })
 
nextTree=this.beh.asObservable(); 
changeData( data:any){
 this.beh.next(data)
}

}




