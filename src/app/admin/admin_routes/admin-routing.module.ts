import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from '../admin-home/adminhome.component';
import { ChangePasswordComponent } from '../../shared/chngepwd/change-password.component';
import { LogoutComponent } from '../logout/logout.component';
export const routes: Routes = [
        {path: 'adminhome', component: AdminhomeComponent},
        {path: 'changePassword', component: ChangePasswordComponent},
        {path: 'logout', component: LogoutComponent}
      ];
 @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class AdminRoutingModule { }
