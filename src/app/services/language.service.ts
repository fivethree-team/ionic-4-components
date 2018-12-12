import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { config } from '@configs/config';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) { }

  initializeLanguage(): any {
    this.translate.addLangs(config.language.support);
    this.translate.setDefaultLang(config.language.default);

    this.useBrowserLanguage();
  }

  useBrowserLanguage() {
    const browserLang = this.translate.getBrowserLang();

    this.useLanguage(browserLang.match(config.language.support.join('|')) ?
      browserLang : config.language.default);
  }

  useLanguage(lang: string) {
    this.translate.use(lang);
  }

  markdownPath(filePath: string) {
    return `${filePath}.${this.translate.currentLang}.md`;
  }
}
