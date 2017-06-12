import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import {JobManagementModule} from './job-management/job-management.module';
import {LabManagementModule} from './lab-management/lab-management.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    JobManagementModule,
    LabManagementModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
