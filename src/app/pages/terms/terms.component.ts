import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-terms',
  imports: [CommonModule, RouterLink],
  templateUrl: './terms.component.html'
})
export class TermsComponent {
  activeLang = 'en';
  private readonly transloco = inject(TranslocoService);

  constructor() {
    this.activeLang = this.transloco.getActiveLang();
    this.transloco.langChanges$.pipe(takeUntilDestroyed()).subscribe((lang) => {
      this.activeLang = lang;
    });
  }
}
