import { ExampleUsingSharedModule } from './modules/example-using-shared/example-using-shared.module';
import { StateManagementModule } from './modules/state-management/state-management.module';
import { AuthenticatedComponent } from './core/layout/authenticated/authenticated.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthenticatedComponent } from './core/layout/unauthenticated/unauthenticated.component';
import { VerifyIsAuthenticatedGuard } from './core/guards/verify-is-authenticated.guard';
import { VerifyAuthStatusGuard } from './core/guards/verify-auth-status.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    canActivate: [VerifyIsAuthenticatedGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'state',
        loadChildren: () => import('./modules/state-management/state-management.module').then(m => m.StateManagementModule)
      },
      {
        path: 'shared-example',
        loadChildren: () => import('./modules/example-using-shared/example-using-shared.module').then(m => m.ExampleUsingSharedModule)
      }
    ]
  },
  {
    path: 'auth',
    component: UnauthenticatedComponent,
    canActivate: [VerifyAuthStatusGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
