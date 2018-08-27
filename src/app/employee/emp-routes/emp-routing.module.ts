import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmphomeComponent } from '../emphome/emphome.component';
import { ChangePasswordComponent } from '../../shared/chngepwd/change-password.component';
import { LogoutComponent } from '../logout/logout.component';
export const routes: Routes = [
        {path: 'emphome', component: EmphomeComponent},
        {path: 'changePassword', component: ChangePasswordComponent},
        {path: 'logout', component: LogoutComponent}
      ];
 @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class EmployeeRoutingModule { }
