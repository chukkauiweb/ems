import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
  { path: 'admin', loadChildren: 'src/app/admin/admin_routes/admin-routing.module#AdminRoutingModule'},
    { path: 'emp', loadChildren: 'src/app/employee/emp-routes/emp-routing.module#EmployeeRoutingModule'},
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }