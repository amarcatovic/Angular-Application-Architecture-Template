import { PaginationModule } from './components/pagination/pagination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFormModule } from './components/payment-form/payment-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymentFormModule,
    PaginationModule
  ],
  exports: [
    PaymentFormModule,
    PaginationModule
  ]
})

export class SharedModule { }
