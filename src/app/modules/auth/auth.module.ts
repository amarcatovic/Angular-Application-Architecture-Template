import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class AuthModule { }
