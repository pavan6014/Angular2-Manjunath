import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {AdminModule} from './admin/admin.module';
import {NavbarModule} from './navbar/navbar.module';
import { NavbarComponent } from './../dashboard/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminModule,
    NavbarModule
  ],
  declarations: [DashboardComponent, NavbarComponent],
  exports: [DashboardComponent, NavbarComponent]
})
export class DashboardModule { }
