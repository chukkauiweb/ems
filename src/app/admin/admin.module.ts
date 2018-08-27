import {AdminComponent} from './admin.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin_routes/admin-routing.module';
import { NgModule } from '@angular/core';
import { AdminhomeComponent } from './admin-home/adminhome.component';
// import { ChangePasswordComponent } from './.././shared/chngepwd/change-password.component';
import { LogoutComponent } from './logout/logout.component';
 @NgModule({
declarations: [AdminComponent, AdminhomeComponent, LogoutComponent, /* ChangePasswordComponent */],
imports: [AdminRoutingModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
providers: []
//  bootstrap: [AdminComponent]
})
export class AdminModule {}