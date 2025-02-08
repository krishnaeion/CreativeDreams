import { RouterModule, Routes } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './component/dashboard.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule } from '@angular/core';
import { Reciever1Component } from './reciever1/reciever1.component';
import { SourceComponent } from './source/source.component';

export const routes:Routes = [
{
    path:'home',
    component:HOMEComponent
},
{
    path:'form',
    component:ReactiveFormComponent
},
{
    path:'templateForm',
    component:TemplateFormComponent
},
{
    path:'recieve',
    component:Reciever1Component
},
{
    path:'source',
    component:SourceComponent
},


]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
  

