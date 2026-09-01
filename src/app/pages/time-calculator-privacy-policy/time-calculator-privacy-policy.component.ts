import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-time-calculator-privacy-policy',
  imports: [CommonModule],
  templateUrl: './time-calculator-privacy-policy.component.html',
  styleUrl: './time-calculator-privacy-policy.component.scss'
})
export class TimeCalculatorPrivacyPolicyComponent {
  activeLang = 'en';
  private readonly transloco = inject(TranslocoService);

  constructor() {
    this.activeLang = this.transloco.getActiveLang();
    this.transloco.langChanges$.pipe(takeUntilDestroyed()).subscribe((lang) => {
      this.activeLang = lang;
    });
  }
}
