import { isDevMode } from '@angular/core';
import { TranslocoConfig, translocoConfig } from '@jsverse/transloco';

export const translocoAppConfig: TranslocoConfig = translocoConfig({
  availableLangs: ['en', 'de'],
  defaultLang: 'en',
  reRenderOnLangChange: true,
  prodMode: !isDevMode()
});
