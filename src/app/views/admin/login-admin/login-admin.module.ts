import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    LoginAdminRoutingModule,
    RouterModule
  ]
})
export class LoginAdminModule { }
