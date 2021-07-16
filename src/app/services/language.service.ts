import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
    label: string;
    value: string;
}

@Injectable({
    providedIn: 'root',
})
export class LanguagesService {
    public defaultLanguage = 'ru';
    private availableLanguages: Language[] = [
      { label: 'ru', value: 'ru' },
      { label: 'en', value: 'en' },
    ];
    private localStorageKey = 'LANGUAGE';

    constructor(public translate: TranslateService) {}

    public initLanguages(): void {
        this.addLanguages();
        this.translate.use(this.defaultLanguage);
      }

      public addLanguages(): void {
        this.translate.addLangs(this.getAvailableLanguagesValues());
      }

      private getAvailableLanguagesValues(): string[] {
        return this.availableLanguages.map((lang) => lang.value);
      }

      public setLanguage(lang: string): void {
        if (this.getAvailableLanguagesValues().includes(lang)) {
          this.translate.use(lang);
        //   this.setLanguageValueOnLocalStorage(lang);
        }
      }
}
