import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path: '', component:FrontLayoutComponent, children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)},

  ] },
  {path:'admin', component:AdminLayoutComponent, children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard', loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(
      m=>m.DashboardModule
    )},
    {path:'loginadmin', loadChildren:()=>import('./views/admin/login-admin/login-admin.module').then(
      m=>m.LoginAdminModule
    )},
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
