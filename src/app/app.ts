import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, TranslocoModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  activeLang = 'en';
  private readonly supportedLangs = new Set(['en', 'de']);
  private readonly langStorageKey = 'lang';

  constructor(
    private transloco: TranslocoService,
    private router: Router
  ) {
    this.syncLanguage(this.getLangFromLocationSearch());
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.syncLanguage(this.getLangFromQuery()));
  }

  setLang(lang: string): void {
    if (!this.isSupportedLang(lang)) return;

    this.applyLanguage(lang);
    this.router.navigate([], {
      queryParams: { lang },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  private syncLanguage(routeLang: string | null): void {
    if (this.isSupportedLang(routeLang)) {
      this.applyLanguage(routeLang);
      return;
    }

    const storedLang = localStorage.getItem(this.langStorageKey);
    const browserLang = this.getBrowserLang();
    const fallbackLang = this.isSupportedLang(storedLang)
      ? storedLang
      : (browserLang ?? 'en');
    this.applyLanguage(fallbackLang);
  }

  private getLangFromQuery(): string | null {
    return this.router.parseUrl(this.router.url).queryParams['lang'] ?? null;
  }

  private getLangFromLocationSearch(): string | null {
    return new URLSearchParams(window.location.search).get('lang');
  }

  private getBrowserLang(): string | null {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];

    for (const locale of languages) {
      const shortLang = locale?.toLowerCase().split('-')[0] ?? '';
      if (this.isSupportedLang(shortLang)) {
        return shortLang;
      }
    }

    return null;
  }

  private applyLanguage(lang: string): void {
    this.activeLang = lang;
    this.transloco.setActiveLang(lang);
    localStorage.setItem(this.langStorageKey, lang);
  }

  private isSupportedLang(lang: string | null): lang is string {
    return lang !== null && this.supportedLangs.has(lang);
  }
}
