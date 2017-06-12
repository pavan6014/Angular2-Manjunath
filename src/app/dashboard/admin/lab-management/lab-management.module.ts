import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabManagementComponent } from './lab-management.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LabManagementComponent]
})
export class LabManagementModule { }
