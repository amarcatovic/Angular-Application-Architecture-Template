// Common
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

// Services
import { StorageService } from '../storage/storage.service';

// Constants
import { LANGUAGE_SETTINGS } from './../utils/constants';

// rxjs
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public onLanguageChange: Subject<string> = new Subject<string>();

  constructor(
    private translateService: TranslateService,
    private _storage: StorageService) {
    
    this.translateService.addLangs(LANGUAGE_SETTINGS.SUPPORTED_LANGUAGES_ARRAY);
    const savedLanguage = this._storage.getLocalValue(LANGUAGE_SETTINGS.LANGUAGE_COOKIE_SAVE_KEY) || LANGUAGE_SETTINGS.DEFAULT_LANUGAGE;
    this.translateService.setDefaultLang(savedLanguage);

    this.translateService.use(savedLanguage);
   }

   /**
    * Changes the current language
    * @param abbreviation - language abbreviation
    */
   changeLanguage(abbreviation: string): void {
    this.translateService.use(abbreviation);
    localStorage.setItem(LANGUAGE_SETTINGS.LANGUAGE_COOKIE_SAVE_KEY, abbreviation);
    this.onLanguageChange.next(abbreviation);
  }

  /**
   * Gets the current language
   * @returns current language abbreviation
   */
  getCurrentLanguage(): string {
    return localStorage.getItem(LANGUAGE_SETTINGS.LANGUAGE_COOKIE_SAVE_KEY) || LANGUAGE_SETTINGS.DEFAULT_LANUGAGE;
  } 
}
