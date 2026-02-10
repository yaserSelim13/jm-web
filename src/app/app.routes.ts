import { Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { HowComponent } from './how.component';
import { HomeComponent } from './home.component';
import { FaqComponent } from './faq.component';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { SafetyComponent } from './safety.component';
import { ScreenshotsComponent } from './screenshots.component';
import { TermsComponent } from './terms.component';
import { WhyComponent } from './why.component';

export const routes: Routes = [
  { path: 'documentation', component: DocumentationComponent },
  { path: 'how', component: HowComponent },
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'safety', component: SafetyComponent },
  { path: 'screenshots', component: ScreenshotsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'why', component: WhyComponent }
];
