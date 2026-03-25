import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { LogoWall } from './components/logo-wall';
import { ProductPreview } from './components/product-preview';
import { ProblemSection } from './components/problem-section';
import { HiddenCosts } from './components/hidden-costs';
import { SolutionSection } from './components/solution-section';
import { HowItWorks } from './components/how-it-works';
import { TargetAudience } from './components/target-audience';
import { Features } from './components/features';
import { SecuritySection } from './components/security-section';
import { WhyNotContinue } from './components/why-not-continue';
import { Compatibility } from './components/compatibility';
import { ProofSection } from './components/proof-section';
import { FAQ } from './components/faq';
import { Pricing } from './components/pricing';
import { FinalCTA } from './components/final-cta';
import { Footer } from './components/footer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    LogoWall,
    ProductPreview,
    ProblemSection,
    HiddenCosts,
    SolutionSection,
    HowItWorks,
    TargetAudience,
    Features,
    SecuritySection,
    WhyNotContinue,
    Compatibility,
    ProofSection,
    FAQ,
    Pricing,
    FinalCTA,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
