import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDemoComponent } from './search-demo.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDemoRoutingModule { }
