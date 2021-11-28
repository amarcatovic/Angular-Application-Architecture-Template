import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
// Common
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Interceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './services/interceptors/app-interceptor.service';

// Modules and Services
import { MaterialModule } from './modules/material/material.module';
import { CookieService } from 'ngx-cookie-service';
import { TranslationModule } from './modules/translation/translation.module';

// Toastr
import { ToastrModule } from 'ngx-toastr';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';
import { UnauthenticatedComponent } from './layout/unauthenticated/unauthenticated.component';
import { AuthHeaderComponent } from './layout/auth-header/auth-header.component';
import { AuthFooterComponent } from './layout/auth-footer/auth-footer.component';

// Provider objects
const HTTP_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS, 
  useClass: AppInterceptor, 
  multi: true 
};

@NgModule({
  declarations: [
    AuthenticatedComponent,
    UnauthenticatedComponent,
    AuthHeaderComponent,
    AuthFooterComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslationModule
  ],
  providers: [
    HTTP_INTERCEPTOR_PROVIDER,
    CookieService
  ],
  exports: [
    MaterialModule,
    TranslationModule
  ]
})

export class CoreModule { }
