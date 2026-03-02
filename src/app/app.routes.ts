import { Routes } from '@angular/router';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { HowComponent } from './pages/how/how.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SafetyComponent } from './pages/safety/safety.component';
import { TermsComponent } from './pages/terms/terms.component';
import { WhyComponent } from './pages/why/why.component';

export const routes: Routes = [
  { path: 'documentation', component: DocumentationComponent },
  { path: 'how', component: HowComponent },
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'safety', component: SafetyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'why', component: WhyComponent }
];
