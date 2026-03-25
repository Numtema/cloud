import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, Shield, Lock, Activity, CheckCircle2 } from 'lucide-angular';

@Component({
  selector: 'app-security-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="security" class="py-48 relative overflow-hidden bg-bg-primary">
      <!-- Subtle background glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <!-- Header -->
        <div 
          id="security-header"
          class="mb-32 opacity-0"
        >
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-8">
            <span class="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
              Sécurité & Souveraineté
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold font-display max-w-[1000px] leading-[1.1] tracking-tight">
            Ce qui est critique pour votre activité <span class="text-accent-primary">mérite un cadre sérieux.</span>
          </h2>
        </div>

        <!-- Split Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-start">
          
          <!-- Left - Editorial Text -->
          <div 
            id="security-left"
            class="lg:col-span-6 space-y-12 opacity-0"
          >
            <div class="space-y-8">
              <p class="text-3xl md:text-4xl font-medium text-text-primary leading-tight tracking-tight">
                Quand une entreprise gère des données importantes, la question n’est pas seulement : <span class="text-accent-primary">où héberger ?</span>
              </p>
              <p class="text-xl md:text-2xl text-text-secondary leading-relaxed">
                La vraie question est : comment garantir un niveau de maîtrise, de continuité et de sécurité compatible avec les enjeux métier ?
              </p>
            </div>
            
            <div class="pt-12 border-t border-border-subtle">
              <p class="text-2xl text-accent-primary font-medium tracking-tight">
                CloudNaaba a été conçu pour répondre à cette exigence.
              </p>
            </div>

            <div class="hidden lg:block pt-16">
              <div class="p-8 rounded-2xl bg-bg-elevated/50 border border-border-subtle italic">
                <p class="text-text-secondary text-lg leading-relaxed">
                  "Pour une PME sérieuse comme pour une organisation sensible, la stabilité n’est pas un luxe. C’est une condition de confiance."
                </p>
              </div>
            </div>
          </div>

          <!-- Right - Trust Block -->
          <div class="lg:col-span-6 space-y-8">
            @for (item of trustItems; track item.title; let i = $index) {
              <div
                class="group p-8 premium-card overflow-hidden security-card opacity-0"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="flex gap-8 relative z-10">
                  <div class="mt-1 w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors shrink-0">
                    <lucide-icon [name]="item.icon" class="w-5 h-5 text-accent-primary"></lucide-icon>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors tracking-tight">
                      {{ item.title }}
                    </h3>
                    <p class="text-text-secondary leading-relaxed text-lg">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            }

            <!-- Mobile only final block -->
            <div 
              id="security-mobile-footer"
              class="lg:hidden pt-12 text-center opacity-0"
            >
              <p class="text-text-secondary/60 text-lg italic leading-relaxed">
                "Pour une PME sérieuse comme pour une organisation sensible, la stabilité n’est pas un luxe. C’est une condition de confiance."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecuritySection implements AfterViewInit {
  readonly ShieldIcon = Shield;
  readonly LockIcon = Lock;
  readonly ActivityIcon = Activity;
  readonly CheckCircle2Icon = CheckCircle2;

  trustItems = [
    {
      title: "Sécurité intégrée dès le départ",
      description: "Pas ajoutée après coup, mais incluse dans la base d’exploitation.",
      icon: Shield
    },
    {
      title: "Exploitation maîtrisée",
      description: "Moins de manipulations manuelles, moins de risques humains.",
      icon: Lock
    },
    {
      title: "Continuité mieux cadrée",
      description: "Surveillance, stabilité et cadre opérationnel plus clair.",
      icon: Activity
    },
    {
      title: "Gouvernance plus défendable",
      description: "Moins d’outils dispersés, plus de cohérence.",
      icon: CheckCircle2
    }
  ];

  ngAfterViewInit() {
    // Header animation
    animate('#security-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 1, ease: [0.22, 1, 0.36, 1] }
    );

    // Left content animation
    animate('#security-left', 
      { opacity: [0, 1], x: [-20, 0] },
      { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
    );

    // Cards animation
    const cards = document.querySelectorAll('.security-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.8, delay: 0.4 + (i * 0.15), ease: [0.22, 1, 0.36, 1] }
      );
    });

    // Mobile footer animation
    animate('#security-mobile-footer', 
      { opacity: [0, 1] },
      { duration: 1, delay: 0.8, ease: "easeOut" }
    );
  }
}
