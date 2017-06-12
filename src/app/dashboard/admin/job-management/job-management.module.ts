import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobManagementComponent } from './job-management.component';
import { RouterModule } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [JobManagementComponent]
})
export class JobManagementModule { }
