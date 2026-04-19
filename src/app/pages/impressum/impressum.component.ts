import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-impressum',
  imports: [CommonModule, RouterLink],
  templateUrl: './impressum.component.html'
})
export class ImpressumComponent {
  activeLang = 'en';
  private readonly transloco = inject(TranslocoService);

  constructor() {
    this.activeLang = this.transloco.getActiveLang();
    this.transloco.langChanges$.pipe(takeUntilDestroyed()).subscribe((lang) => {
      this.activeLang = lang;
    });
  }
}
