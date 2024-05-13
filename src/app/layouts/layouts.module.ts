// layouts/layouts.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './front-layout/sidenav/sidenav.component';
import { BodyComponent } from '../views/front/body/body.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { NavbarComponent } from './admin-layout/navbar/navbar.component';
import { FooterComponent } from './admin-layout/footer/footer.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    SidenavComponent,
    BodyComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbCollapseModule,
  ],
  exports: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    SidenavComponent,
    BodyComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
    
  ]
})
export class LayoutsModule { }
