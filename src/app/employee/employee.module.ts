import {EmployeeComponent} from './emp.component';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './emp-routes/emp-routing.module';
import { EmphomeComponent } from './emphome/emphome.component';
import { ChangePasswordComponent } from '../shared/chngepwd/change-password.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [EmphomeComponent, EmployeeComponent, ChangePasswordComponent, LogoutComponent],
   imports: [EmployeeRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
   providers: []
  //  bootstrap: [/* EmployeeComponent */]
})
export class EmployeeModule { }
