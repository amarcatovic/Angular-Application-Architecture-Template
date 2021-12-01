import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDemoRoutingModule } from './search-demo-routing.module';
import { SearchDemoComponent } from './search-demo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchDemoComponent
  ],
  imports: [
    CommonModule,
    SearchDemoRoutingModule,
    ReactiveFormsModule
  ]
})
export class SearchDemoModule { }
