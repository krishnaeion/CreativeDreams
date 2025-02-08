import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnInit, ViewChild} from '@angular/core';
import { RouterLink, Router,ActivatedRoute} from '@angular/router';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BackgroundComponent } from "../background/background.component";
import { DashboardService } from '../component/dashboard.service';
import { LoginComponent } from '../login/login.component';
import { Reciever1Component } from '../reciever1/reciever1.component';
import { Reciever2Component } from '../reciever2/reciever2.component';
import { SourceComponent } from '../source/source.component';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CarouselComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent, ThemeDirective, NgbModule, CommonModule, BackgroundComponent,RouterLink,Reciever1Component,Reciever2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HOMEComponent implements OnInit {
dashBoardService:DashboardService;
@ViewChild(LoginComponent) login;



selectChange($event){
  event.target
}
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
  interval = 1000;
  constructor( activatedRoute:ActivatedRoute ){
this.dashBoardService=inject(DashboardService);
  }
  ngOnInit(){
    this.dashBoardService.beh.subscribe(res =>{
      console.log(res);
    })
  this.slides[0] = {
    src: 'src/assets/file.png'
  };
  this.slides[1] = {
    src: 'src/assets/dream1.jpeg'
  };
  this.slides[2] = {
    src: 'src/assets/dream2.jpeg'
  };
}

onItemChange($event: any): void {
  console.log('Carousel onItemChange', $event);


}

}
