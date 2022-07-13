import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: '', component: RegisterUserComponent }
];

@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterUserModule { }
