import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, AlertCircle, CheckCircle2 } from 'lucide-angular';

@Component({
  selector: 'app-why-not-continue',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-32 relative overflow-hidden bg-[#050505]">
      <div class="container mx-auto max-w-[1140px] px-6">
        <!-- Header -->
        <div 
          id="why-header"
          class="text-center mb-24 opacity-0"
        >
          <h2 class="text-3xl md:text-5xl font-bold font-display max-w-[900px] mx-auto leading-tight">
            Ce qui <span class="text-white/40 italic">“fonctionne à peu près”</span> devient un problème dès que votre projet compte vraiment.
          </h2>
        </div>

        <!-- Comparison Block -->
        <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
          
          <!-- Vertical Divider (Desktop) -->
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent z-10">
            <div 
              id="divider-line"
              class="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/40 to-transparent origin-top scale-y-0"
            ></div>
          </div>

          <!-- Left - Sans cadre clair -->
          <div 
            id="why-left"
            class="lg:pr-16 space-y-10 opacity-0"
          >
            <div class="space-y-2">
              <span class="text-xs uppercase tracking-[0.2em] text-white/30 font-bold">Sans cadre clair</span>
              <h3 class="text-2xl font-bold text-white/60">L’inertie technique</h3>
            </div>

            <div class="space-y-6">
              @for (problem of problems; track problem; let i = $index) {
                <div 
                  class="flex items-start gap-4 group problem-item opacity-0"
                >
                  <lucide-icon [name]="AlertCircleIcon" class="w-5 h-5 text-white/20 mt-0.5 shrink-0 group-hover:text-white/40 transition-colors"></lucide-icon>
                  <p class="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
                    {{ problem }}
                  </p>
                </div>
              }
            </div>
          </div>

          <!-- Right - Avec CloudNaaba -->
          <div 
            id="why-right"
            class="lg:pl-16 space-y-10 opacity-0"
          >
            <div class="space-y-2">
              <span class="text-xs uppercase tracking-[0.2em] text-accent-primary font-bold">Avec CloudNaaba</span>
              <h3 class="text-2xl font-bold text-white">La structure d’exploitation</h3>
            </div>

            <div class="space-y-6">
              @for (benefit of benefits; track benefit; let i = $index) {
                <div 
                  class="flex items-start gap-4 group benefit-item opacity-0"
                >
                  <lucide-icon [name]="CheckCircle2Icon" class="w-5 h-5 text-accent-primary mt-0.5 shrink-0 group-hover:text-accent-primary/80 transition-colors"></lucide-icon>
                  <p class="text-white/90 group-hover:text-white transition-colors leading-relaxed">
                    {{ benefit }}
                  </p>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Final Statement -->
        <div 
          id="why-footer"
          class="mt-32 pt-12 border-t border-white/5 text-center opacity-0"
        >
          <p class="text-xl md:text-2xl font-medium text-white/80 max-w-[800px] mx-auto leading-relaxed">
            Le sujet n’est pas d’avoir <span class="text-white italic">“du cloud”</span>. <br class="hidden md:block" />
            Le sujet est d’avoir un service qui <span class="text-accent-primary">tient, évolue et protège</span> votre activité.
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyNotContinue implements AfterViewInit {
  readonly AlertCircleIcon = AlertCircle;
  readonly CheckCircle2Icon = CheckCircle2;

  problems = [
    "Le déploiement dépend de personnes",
    "Les incidents coûtent plus cher qu’ils ne devraient",
    "La sécurité arrive trop tard",
    "Les évolutions deviennent risquées",
    "La croissance se fait dans la contrainte"
  ];

  benefits = [
    "Déploiement structuré et reproductible",
    "Exploitation plus lisible",
    "Sécurité intégrée dès le départ",
    "Évolutions plus maîtrisées",
    "Base technique prête à grandir"
  ];

  ngAfterViewInit() {
    // Header animation
    animate('#why-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    // Divider animation
    animate('#divider-line', 
      { scaleY: [0, 1] },
      { duration: 1, delay: 0.5, ease: "easeOut" }
    );

    // Left content animation
    animate('#why-left', 
      { opacity: [0, 1], x: [-20, 0] },
      { duration: 0.8, ease: "easeOut" }
    );

    // Problems animation
    const problems = document.querySelectorAll('.problem-item');
    problems.forEach((item, i) => {
      animate(item, 
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.4, delay: 0.2 + (i * 0.08), ease: "easeOut" }
      );
    });

    // Right content animation
    animate('#why-right', 
      { opacity: [0, 1], x: [20, 0] },
      { duration: 0.8, delay: 0.3, ease: "easeOut" }
    );

    // Benefits animation
    const benefits = document.querySelectorAll('.benefit-item');
    benefits.forEach((item, i) => {
      animate(item, 
        { opacity: [0, 1], x: [10, 0] },
        { duration: 0.4, delay: 0.5 + (i * 0.08), ease: "easeOut" }
      );
    });

    // Footer animation
    animate('#why-footer', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.8, delay: 1, ease: "easeOut" }
    );
  }
}
