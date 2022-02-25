import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeDetailsMainComponent } from './components/employee-details-main/employee-details-main.component';


@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    EmployeeDetailsMainComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule
  ]
})
export class EmployeeDetailsModule { }
