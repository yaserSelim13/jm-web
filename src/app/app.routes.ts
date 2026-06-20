import { Routes } from '@angular/router';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { HowComponent } from './pages/how/how.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SafetyComponent } from './pages/safety/safety.component';
import { TermsComponent } from './pages/terms/terms.component';
import { LipGuessPrivacyPolicyComponent } from './pages/lipguess-privacy-policy/lipguess-privacy-policy.component';

export const routes: Routes = [
  { path: 'documentation', component: DocumentationComponent },
  { path: 'how', component: HowComponent },
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'lipguess/privacy-policy', component: LipGuessPrivacyPolicyComponent },
  { path: 'safety', component: SafetyComponent },
  { path: 'terms', component: TermsComponent }
];
