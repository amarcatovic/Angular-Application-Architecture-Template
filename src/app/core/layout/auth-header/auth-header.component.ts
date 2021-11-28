import { TranslationService } from './../../services/translation/translation.service';
import { LANGUAGE_SETTINGS, USER_SAVE_KEY } from './../../services/utils/constants';
import { StorageService } from './../../services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit {

  languages: any[];

  constructor(
    private _storage: StorageService,
    private _router: Router,
    private _translation: TranslationService
  ) { }

  ngOnInit(): void {
    this.languages = LANGUAGE_SETTINGS.SUPPORTED_LANGUAGES;
  }

  /**
   * Log off user and redirect to auth page
   */
  logOff(): void {
    this._storage.deleteLocalItem(USER_SAVE_KEY);
    this._router.navigate(['/auth']);
  }

  changeLanguage(abbreviation: string): void {
    this._translation.changeLanguage(abbreviation);
  }
}
