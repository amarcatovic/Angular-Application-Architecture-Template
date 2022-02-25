import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDemoComponent } from './search-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDemoComponent
  },
  {
    path: 'details',
    loadChildren: () => import('../../shared/modules/employee-details/employee-details.module').then(m => m.EmployeeDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDemoRoutingModule { }
