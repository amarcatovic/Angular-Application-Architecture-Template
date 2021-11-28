import { MaterialModule } from './../../core/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateManagementRoutingModule } from './state-management-routing.module';
import { StateManagementComponent } from './state-management.component';
import { StateOneComponent } from './pages/state-one/state-one.component';
import { StateTwoComponent } from './pages/state-two/state-two.component';
import { StateThreeComponent } from './pages/state-three/state-three.component';
import { StoreModule } from '@ngrx/store';
import { countersReducer } from './state/reducers/counters.reducer';


@NgModule({
  declarations: [
    StateManagementComponent,
    StateOneComponent,
    StateTwoComponent,
    StateThreeComponent
  ],
  imports: [
    CommonModule,
    StateManagementRoutingModule,
    MaterialModule,
    StoreModule.forRoot({
      counters: countersReducer
    })
  ]
})
export class StateManagementModule { }
