import { LANGUAGE_SETTINGS } from './../../services/utils/constants';
// Common
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Http
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => { return new TranslateHttpLoader(http, LANGUAGE_SETTINGS.LANGUAGE_FILES_LOCATION, LANGUAGE_SETTINGS.LANGUAGE_FILES_TYPES); },
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ]
})

export class TranslationModule { }
