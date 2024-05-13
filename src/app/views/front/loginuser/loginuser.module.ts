import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

import { LoginuserRoutingModule } from './loginuser-routing.module';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [
    LoginuserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginuserRoutingModule,
    HttpClientModule, 
  ],
  providers: [
    AuthService, // Ajoutez votre service AuthService ici si vous souhaitez le rendre disponible dans ce module
  ]
})
export class LoginuserModule { }
