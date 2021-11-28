import { TranslateModule } from '@ngx-translate/core';
import { TranslationModule } from './../../core/modules/translation/translation.module';
import { PaginationModule } from './../../shared/components/pagination/pagination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleUsingSharedRoutingModule } from './example-using-shared-routing.module';
import { ExampleUsingSharedComponent } from './example-using-shared.component';
import { PaymentFormModule } from 'src/app/shared/components/payment-form/payment-form.module';
import { MaterialModule } from 'src/app/core/modules/material/material.module';

@NgModule({
  declarations: [
    ExampleUsingSharedComponent
  ],
  imports: [
    CommonModule,
    ExampleUsingSharedRoutingModule,
    PaymentFormModule,
    PaginationModule,
    MaterialModule,
    TranslateModule
  ]
})
export class ExampleUsingSharedModule { }
