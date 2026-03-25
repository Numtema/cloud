import { ChangeDetectionStrategy, Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, Check } from 'lucide-angular';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="pricing" class="py-48 bg-bg-primary relative overflow-hidden">
      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <!-- Header -->
        <div 
          id="pricing-header"
          class="text-center mb-16 opacity-0"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            Une offre adaptée à votre <span class="text-accent-primary">niveau de besoin.</span>
          </h2>
          <p class="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
            CloudNaaba s’adapte à la maturité de votre projet, du test à l’exploitation critique.
          </p>
        </div>

        <!-- Toggle -->
        <div class="flex items-center justify-center gap-6 mb-24">
          <span 
            class="text-sm font-bold uppercase tracking-widest transition-colors"
            [class.text-text-primary]="!isYearly()"
            [class.text-text-secondary]="isYearly()"
          >Mensuel</span>
          <button 
            (click)="toggleYearly()"
            class="w-16 h-8 rounded-full bg-white/5 border border-border-subtle p-1 relative transition-all hover:border-accent-primary/50 group"
          >
            <div 
              id="pricing-toggle-dot"
              class="w-6 h-6 rounded-full bg-accent-primary shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:scale-110 transition-transform"
              [style.transform]="isYearly() ? 'translateX(32px)' : 'translateX(0)'"
            ></div>
          </button>
          <span 
            class="text-sm font-bold uppercase tracking-widest transition-colors"
            [class.text-text-primary]="isYearly()"
            [class.text-text-secondary]="!isYearly()"
          >
            Annuel <span class="text-accent-primary ml-2 text-xs font-black">ÉCONOMISEZ 20%</span>
          </span>
        </div>

        <!-- Pricing Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          @for (plan of plans; track plan.name; let i = $index) {
            <div
              class="relative flex flex-col p-10 premium-card transition-all duration-500 group pricing-card opacity-0"
              [class.border-accent-primary-50]="plan.highlight"
              [class.scale-105]="plan.highlight"
              [class.z-10]="plan.highlight"
              [class.shadow-accent-glow]="plan.highlight"
              [class.hover:border-white-10]="!plan.highlight"
            >
              @if (plan.badge) {
                <div 
                  class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] z-20"
                  [class.bg-accent-primary]="plan.highlight"
                  [class.text-white]="plan.highlight"
                  [class.bg-white-10]="!plan.highlight"
                  [class.text-white-60]="!plan.highlight"
                >
                  {{ plan.badge }}
                </div>
              }

              @if (plan.highlight) {
                <div 
                  class="absolute inset-0 rounded-[18px] border-2 border-accent-primary/30 pointer-events-none z-10 highlight-border"
                ></div>
              }

              <div class="mb-10 relative z-10">
                <h3 
                  class="text-2xl font-bold mb-4 tracking-tight"
                  [class.text-accent-primary]="plan.highlight"
                  [class.text-text-primary]="!plan.highlight"
                >
                  {{ plan.name }}
                </h3>
                <div class="flex items-baseline gap-1 mb-6">
                  <span 
                    class="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter price-value"
                    [attr.data-monthly]="plan.monthlyPrice"
                    [attr.data-yearly]="plan.yearlyPrice"
                  >
                    {{ isYearly() ? plan.yearlyPrice : plan.monthlyPrice }}
                  </span>
                  @if (plan.name !== "Entreprise" && plan.name !== "Freestyle") {
                    <span class="text-text-secondary text-sm font-medium">/ mois</span>
                  }
                </div>
                <p class="text-lg text-text-secondary leading-relaxed min-h-[60px] font-medium">
                  {{ plan.description }}
                </p>
              </div>

              <div class="flex-1 mb-12 relative z-10">
                <ul class="space-y-5">
                  @for (feature of plan.features; track feature) {
                    <li class="flex items-start gap-3 text-base text-text-secondary group-hover:text-text-primary transition-colors">
                      <div 
                        class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        [class.bg-accent-primary-10]="plan.highlight"
                        [class.text-accent-primary]="plan.highlight"
                        [class.bg-white-05]="!plan.highlight"
                        [class.text-text-secondary-40]="!plan.highlight"
                      >
                        <lucide-icon [name]="CheckIcon" class="w-3 h-3"></lucide-icon>
                      </div>
                      <span class="font-medium">{{ feature }}</span>
                    </li>
                  }
                </ul>
              </div>

              <button 
                class="w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 tracking-tight relative z-10"
                [class.bg-accent-primary]="plan.highlight"
                [class.text-white]="plan.highlight"
                [class.hover:bg-accent-primary-90]="plan.highlight"
                [class.hover:shadow-accent-glow-30]="plan.highlight"
                [class.bg-white-05]="!plan.highlight"
                [class.text-text-primary]="!plan.highlight"
                [class.hover:bg-white-10]="!plan.highlight"
                [class.border]="!plan.highlight"
                [class.border-white-10]="!plan.highlight"
              >
                {{ plan.cta }}
              </button>
            </div>
          }
        </div>

        <!-- Final Trust Line -->
        <div 
          id="pricing-footer"
          class="mt-32 text-center opacity-0"
        >
          <p class="text-text-secondary/60 text-xl font-medium leading-relaxed">
            Choisissez un cadre adapté aujourd’hui, sans bloquer votre évolution demain.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .border-accent-primary-50 { border-color: rgba(124, 58, 237, 0.5); }
    .shadow-accent-glow { box-shadow: 0 0 60px -15px rgba(124, 58, 237, 0.2); }
    .hover:border-white-10:hover { border-color: rgba(255, 255, 255, 0.1); }
    .bg-white-10 { background-color: rgba(255, 255, 255, 0.1); }
    .text-white-60 { color: rgba(255, 255, 255, 0.6); }
    .bg-accent-primary-10 { background-color: rgba(124, 58, 237, 0.1); }
    .bg-white-05 { background-color: rgba(255, 255, 255, 0.05); }
    .text-text-secondary-40 { color: rgba(167, 170, 180, 0.4); }
    .hover:bg-accent-primary-90:hover { background-color: rgba(124, 58, 237, 0.9); }
    .hover:shadow-accent-glow-30:hover { box-shadow: 0 0 30px rgba(124, 58, 237, 0.4); }
    .hover:bg-white-10:hover { background-color: rgba(255, 255, 255, 0.1); }
    .border-white-10 { border-color: rgba(255, 255, 255, 0.1); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing implements AfterViewInit {
  readonly CheckIcon = Check;

  isYearly = signal(true);

  plans = [
    {
      name: "Freestyle",
      description: "Pour expérimenter, tester ou démarrer simplement.",
      monthlyPrice: "0€",
      yearlyPrice: "0€",
      features: ["Mise en ligne simple", "Cadre de base", "Idéal pour test"],
      cta: "Commencer",
      highlight: false,
    },
    {
      name: "Starter",
      description: "Pour les premiers projets qui ont besoin d’un déploiement propre.",
      monthlyPrice: "29€",
      yearlyPrice: "24€",
      features: ["Déploiement structuré", "Base de sécurité", "Mise en ligne fiable"],
      cta: "Commencer",
      highlight: false,
    },
    {
      name: "Standard",
      description: "Pour les PME et services en production.",
      monthlyPrice: "99€",
      yearlyPrice: "79€",
      features: ["Exploitation stable", "Supervision", "Sécurité renforcée", "Cadre évolutif"],
      cta: "Choisir Standard",
      highlight: true,
      badge: "Recommandé",
    },
    {
      name: "Entreprise",
      description: "Pour les structures avec exigences élevées.",
      monthlyPrice: "Sur devis",
      yearlyPrice: "Sur devis",
      features: ["Gouvernance", "Personnalisation", "Accompagnement", "Niveau avancé de contrôle"],
      cta: "Parler à un expert",
      highlight: false,
      badge: "Sur mesure",
    }
  ];

  toggleYearly() {
    this.isYearly.set(!this.isYearly());
    this.animatePriceChange();
  }

  animatePriceChange() {
    const prices = document.querySelectorAll('.price-value');
    prices.forEach((price) => {
      animate(price, 
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.3, ease: "easeOut" }
      );
    });
  }

  ngAfterViewInit() {
    // Header animation
    animate('#pricing-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    // Cards animation
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
      );
    });

    // Highlight border pulse
    const borders = document.querySelectorAll('.highlight-border');
    borders.forEach((border) => {
      animate(border, 
        { opacity: [0.3, 0.6, 0.3] },
        { duration: 3, repeat: Infinity }
      );
    });

    // Footer animation
    animate('#pricing-footer', 
      { opacity: [0, 1] },
      { duration: 1, delay: 0.8, ease: "easeOut" }
    );
  }
}
