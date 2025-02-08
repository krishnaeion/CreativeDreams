
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import {routes} from './app.routing.module';
import { HOMEComponent } from './home/home.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SourceComponent } from './source/source.component';
@NgModule({
  declarations: [
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CarouselComponent,
     CarouselInnerComponent, 
     NgFor, 
    CarouselItemComponent,ThemeDirective,
    RouterModule.forRoot(routes),
    RouterOutlet,
  

  
  ],
  providers: [provideAnimations()],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {

 }