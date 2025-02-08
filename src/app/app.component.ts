import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackgroundComponent } from './background/background.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[FormsModule,RouterOutlet,CommonModule,BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CreativeDreams';
  appName="hi";
  select(event:any){
    console.log(event);
  }
  setData(data:any){
console.log(data);
  }
}
