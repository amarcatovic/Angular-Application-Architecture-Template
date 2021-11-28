import { Component } from '@angular/core';
import { TranslationService } from './core/services/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _translation: TranslationService
  ) {}

  changeLanguage(abbreviation: string): void {
    this._translation.changeLanguage(abbreviation);
  }
}
