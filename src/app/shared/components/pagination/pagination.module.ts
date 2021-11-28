import { MaterialModule } from './../../../core/modules/material/material.module';
import { PaymentFormModule } from './../payment-form/payment-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
