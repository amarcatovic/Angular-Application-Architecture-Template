import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeDetailsMainComponent } from './components/employee-details-main/employee-details-main.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsMainComponent,
    children: [
      { 
        path: ':id', 
        component: EmployeeDetailsComponent
      },
      { 
        path: ':id/edit', 
        component: EditEmployeeComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }
