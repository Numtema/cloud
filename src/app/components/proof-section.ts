import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, ShieldCheck, Zap, UserMinus, Layout } from 'lucide-angular';

@Component({
  selector: 'app-proof-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-48 bg-bg-primary relative overflow-hidden">
      <!-- Background subtle glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <!-- Header -->
        <div 
          id="proof-header"
          class="max-w-[850px] mb-32 opacity-0"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-10 leading-[1.1] tracking-tight">
            Une plateforme utile se juge sur ce qu’elle <span class="text-accent-primary">simplifie</span> et sur ce qu’elle <span class="text-accent-primary">sécurise.</span>
          </h2>
          <div 
            id="proof-sub"
            class="border-l-2 border-accent-primary/30 pl-10 opacity-0"
          >
            <p class="text-text-secondary text-xl md:text-2xl leading-relaxed max-w-[750px] font-medium">
              CloudNaaba est conçu pour répondre à des besoins concrets : réduire la complexité, sécuriser l’exploitation et offrir un cadre plus fiable aux entreprises.
            </p>
          </div>
        </div>

        <!-- Proof Blocks Grid - Balanced 2x2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          @for (block of proofBlocks; track block.title; let i = $index) {
            <div
              class="p-10 premium-card group relative overflow-hidden proof-card opacity-0"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-8 group-hover:scale-110 transition-transform duration-500 border border-accent-primary/20">
                  <lucide-icon [name]="block.icon" class="w-6 h-6"></lucide-icon>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {{ block.title }}
                </h3>
                <p class="text-text-secondary text-lg leading-relaxed">
                  {{ block.description }}
                </p>
              </div>
            </div>
          }
        </div>

        <!-- Metrics Row -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 py-24 border-y border-border-subtle mb-32 bg-white/[0.01] relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/[0.02] to-transparent pointer-events-none"></div>
          
          @for (metric of metrics; track metric.label; let i = $index) {
            <div
              class="text-center relative z-10 metric-item opacity-0"
            >
              <div class="flex items-baseline justify-center gap-1 mb-3">
                <span class="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter counter-value" [attr.data-value]="metric.value">
                  {{ metric.value }}
                </span>
              </div>
              <div class="text-xs font-bold uppercase tracking-[0.3em] text-accent-primary mb-2">
                {{ metric.label }}
              </div>
              <div class="text-sm text-text-secondary/40 font-medium">
                {{ metric.sub }}
              </div>
            </div>
          }
        </div>

        <!-- Case Studies Placeholders -->
        <div class="mb-32">
          <div class="flex items-center gap-6 mb-16">
            <div class="h-px flex-1 bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
            <h4 class="text-xs font-bold uppercase tracking-[0.4em] text-text-secondary/40 whitespace-nowrap">
              Contextes d'application
            </h4>
            <div class="h-px flex-1 bg-gradient-to-r from-border-subtle via-border-subtle to-transparent"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            @for (item of caseStudies; track item.type; let i = $index) {
              <div
                class="p-12 rounded-3xl border border-dashed border-border-subtle flex flex-col justify-center items-center text-center hover:border-accent-primary/30 hover:bg-accent-primary/[0.02] transition-all duration-500 group case-study opacity-0"
              >
                <div class="text-text-primary font-bold mb-4 text-xl tracking-tight group-hover:text-accent-primary transition-colors">{{ item.type }}</div>
                <p class="text-lg text-text-secondary italic leading-relaxed max-w-[350px]">
                  "{{ item.outcome }}"
                </p>
              </div>
            }
          </div>
        </div>

        <!-- Final Statement -->
        <div 
          id="proof-footer"
          class="text-center max-w-[700px] mx-auto opacity-0"
        >
          <p class="text-text-secondary/60 text-xl md:text-2xl font-medium leading-relaxed">
            L’exploitation devient <span class="text-text-primary">plus simple</span>, <span class="text-text-primary">plus stable</span> et <span class="text-text-primary">plus défendable</span>.
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProofSection implements AfterViewInit {
  readonly ShieldCheckIcon = ShieldCheck;
  readonly ZapIcon = Zap;
  readonly UserMinusIcon = UserMinus;
  readonly LayoutIcon = Layout;

  proofBlocks = [
    {
      title: "Moins de dépendance humaine",
      description: "CloudNaaba réduit la dépendance à une expertise infra rare et difficile à maintenir dans une PME.",
      icon: UserMinus
    },
    {
      title: "Mise en ligne plus rapide",
      description: "Les déploiements sont cadrés, automatisés et reproductibles pour une agilité réelle.",
      icon: Zap
    },
    {
      title: "Réduction des risques",
      description: "Moins d'interventions manuelles signifie moins d'erreurs humaines et plus de stabilité.",
      icon: ShieldCheck
    },
    {
      title: "Socle structuré",
      description: "Vos projets reposent sur une base claire, stable et évolutive dès le premier jour.",
      icon: Layout
    }
  ];

  metrics = [
    { label: "Temps de mise en ligne", value: "-80%", sub: "en moyenne" },
    { label: "Incidents critiques", value: "Minimal", sub: "par design" },
    { label: "Temps de maintenance", value: "-60%", sub: "réduction" },
    { label: "Déploiement", value: "Minutes", sub: "vs heures" }
  ];

  caseStudies = [
    {
      type: "Plateforme métier PME",
      outcome: "Déploiement simplifié et exploitation stabilisée sans équipe infra dédiée."
    },
    {
      type: "Application SaaS B2B",
      outcome: "Migration vers un socle sécurisé et automatisé en moins de 48h."
    }
  ];

  ngAfterViewInit() {
    // Header animation
    animate('#proof-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );
    animate('#proof-sub', 
      { opacity: [0, 1], x: [-20, 0] },
      { duration: 0.6, delay: 0.2, ease: "easeOut" }
    );

    // Cards animation
    const cards = document.querySelectorAll('.proof-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
      );
    });

    // Metrics animation
    const metrics = document.querySelectorAll('.metric-item');
    metrics.forEach((item, i) => {
      animate(item, 
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.5, delay: 0.4 + (i * 0.1), ease: "easeOut" }
      );
    });

    // Case studies animation
    const studies = document.querySelectorAll('.case-study');
    studies.forEach((study, i) => {
      animate(study, 
        { opacity: [0, 1], scale: [0.98, 1] },
        { duration: 0.6, delay: 0.6 + (i * 0.1), ease: "easeOut" }
      );
    });

    // Footer animation
    animate('#proof-footer', 
      { opacity: [0, 1] },
      { duration: 1, delay: 0.8, ease: "easeOut" }
    );

    // Counter animation (simplified)
    const counters = document.querySelectorAll('.counter-value');
    counters.forEach((counter) => {
      const val = counter.getAttribute('data-value') || '';
      const numeric = parseInt(val.replace(/[^0-9]/g, '')) || 0;
      if (numeric > 0) {
        const prefix = val.startsWith('-') ? '-' : '';
        const suffix = val.replace(/[0-9-]/g, '');
        
        let start = 0;
        const duration = 2000;
        const increment = numeric / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= numeric) {
            counter.textContent = `${prefix}${numeric}${suffix}`;
            clearInterval(timer);
          } else {
            counter.textContent = `${prefix}${Math.floor(start)}${suffix}`;
          }
        }, 16);
      }
    });
  }
}
