import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, Building2, ShieldCheck, Terminal, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-target-audience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-32 relative overflow-hidden bg-[#050505]">
      <div class="container mx-auto max-w-[1240px] px-6">
        <!-- Header Section -->
        <div 
          id="target-header"
          class="text-center mb-24 opacity-0"
        >
          <h2 class="text-3xl md:text-5xl font-bold font-display mb-8 max-w-[900px] mx-auto leading-tight">
            Pensé pour les entreprises qui ont des projets sérieux, <span class="text-accent-primary">sans vouloir gérer une usine technique.</span>
          </h2>
          <p class="text-text-secondary text-lg md:text-xl max-w-[750px] mx-auto leading-relaxed">
            CloudNaaba s’adresse aux structures qui veulent exploiter leurs applications correctement, sans complexifier leur organisation.
          </p>
        </div>

        <!-- Target Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          @for (target of targets; track target.title; let i = $index) {
            <div
              class="group relative p-8 md:p-10 rounded-[20px] bg-[#0D0D11] border border-white/5 hover:border-accent-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full target-card opacity-0"
            >
              <!-- Soft Halo Effect -->
              <div class="absolute -inset-1 rounded-[20px] bg-accent-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"></div>

              <!-- Icon -->
              <div class="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors relative z-10">
                <lucide-icon [name]="target.icon" class="w-8 h-8 text-accent-primary"></lucide-icon>
              </div>

              <!-- Content -->
              <div class="relative z-10 flex-grow">
                <h3 class="text-2xl font-bold mb-6 text-text-primary group-hover:text-accent-primary transition-colors">
                  {{ target.title }}
                </h3>
                <p class="text-text-secondary leading-relaxed mb-8 text-lg">
                  {{ target.description }}
                </p>
              </div>

              <!-- Micro Benefit -->
              <div class="relative z-10 pt-8 border-t border-white/5 mt-auto">
                <div class="flex items-start gap-3">
                  <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(124,58,237,0.6)]"></div>
                  <p class="text-sm font-medium text-accent-primary/90 italic leading-snug">
                    {{ target.benefit }}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Optional Micro CTA -->
        <div 
          id="target-cta"
          class="mt-20 text-center opacity-0"
        >
          <button class="group flex items-center gap-2 mx-auto text-text-secondary hover:text-accent-primary transition-colors text-sm font-medium">
            <span>Voir comment CloudNaaba s’intègre à votre cas</span>
            <lucide-icon [name]="ChevronRightIcon" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></lucide-icon>
          </button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TargetAudience implements AfterViewInit {
  readonly Building2Icon = Building2;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly TerminalIcon = Terminal;
  readonly ChevronRightIcon = ChevronRight;

  targets = [
    {
      title: "PME en digitalisation",
      description: "Vous avez un site important, une plateforme métier ou un portail client. Vous voulez un déploiement propre et fiable, sans devoir construire une équipe d’exploitation.",
      benefit: "Un service plus stable, plus propre, plus facile à faire évoluer",
      icon: Building2
    },
    {
      title: "Organisations à données sensibles",
      description: "Santé, finance, éducation, ONG ou services critiques : quand la continuité et la sécurité comptent, l’improvisation n’est pas une option.",
      benefit: "Un cadre d’exploitation plus maîtrisé, orienté sécurité et gouvernance",
      icon: ShieldCheck
    },
    {
      title: "Équipes techniques légères",
      description: "Vous avez des développeurs, mais pas d’ingénieur infra dédié. Vous ne voulez pas transformer votre équipe produit en équipe de maintenance.",
      benefit: "Une stack exploitable sans complexifier votre organisation",
      icon: Terminal
    }
  ];

  ngAfterViewInit() {
    // Header animation
    animate('#target-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    // Cards animation
    const cards = document.querySelectorAll('.target-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, delay: 0.15 + (i * 0.15), ease: "easeOut" }
      );
    });

    // CTA animation
    animate('#target-cta', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: 0.8, ease: "easeOut" }
    );
  }
}
