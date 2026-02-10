import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, TranslocoModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeLang = 'en';

  constructor(private transloco: TranslocoService) {
    this.activeLang = this.transloco.getActiveLang();
  }

  setLang(lang: string): void {
    this.activeLang = lang;
    this.transloco.setActiveLang(lang);
  }
}
