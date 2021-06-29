import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { Route, RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Route[] = [
  {path: '', component: SigninComponent}
]

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
  CommonModule,
  AppMaterialModule,
  ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SigninComponent
  ]
})
export class SigninModule { }
