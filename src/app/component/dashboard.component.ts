import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
     FormsModule,
     
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dashboardService!:DashboardService
  dreamCatchers:any[]=[];
  currentIndex:number=0;
  previousValue: any;
  inputValue: any;
constructor(){
  this.dashboardService=inject(DashboardService);
}
ngOnInit(): void {
  this.dashboardService.changeData('latestData');
}
ngOnChanges(): void{

}
scrollUp(){
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}
scrollDown() {
  if (this.currentIndex < this.dreamCatchers.length - 1) {
    this.currentIndex++;
  }
}
ngDoCheck() {
  // Custom change detection logic
  if (this.inputValue !== this.previousValue) {
    console.log(`Detected change: ${this.inputValue}`);
    this.previousValue = this.inputValue;
  }

}
}