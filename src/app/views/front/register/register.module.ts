import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../../services/auth.service';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    HttpClientModule, 
  ],
  providers: [
    AuthService, // Ajoutez votre service AuthService ici si vous souhaitez le rendre disponible dans ce module
  ]
})
export class RegisterModule { }
