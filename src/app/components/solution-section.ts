import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, Rocket, ShieldCheck, BarChart3 } from 'lucide-angular';

@Component({
  selector: 'app-solution-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-32 relative overflow-hidden bg-bg-primary">
      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <!-- Left Content -->
          <div class="lg:col-span-7">
            <div
              id="solution-header"
              class="opacity-0"
            >
              <div class="inline-flex items-center px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-8">
                <span class="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                  La solution CloudNaaba
                </span>
              </div>
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 text-text-primary tracking-tight">
                CloudNaaba professionnalise l’exploitation de vos applications, <span class="text-accent-primary">sans vous imposer la complexité d’un cloud lourd.</span>
              </h2>
              <p class="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-[640px]">
                CloudNaaba n’est pas un simple hébergement. C’est une plateforme conçue pour structurer, sécuriser et simplifier l’exploitation de vos applications.
              </p>
              
              <div class="bg-bg-elevated/50 border-l-4 border-accent-primary p-8 mb-12 rounded-r-2xl backdrop-blur-sm">
                <p class="text-2xl font-medium text-text-primary italic leading-tight tracking-tight">
                  "Vous vous concentrez sur votre produit. CloudNaaba prend en charge ce qui ralentit votre exploitation."
                </p>
              </div>
            </div>

            <!-- Benefits Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              @for (benefit of benefits; track benefit.title; let i = $index) {
                <div
                  class="group relative p-8 premium-card overflow-hidden benefit-card opacity-0"
                >
                  <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div class="relative z-10">
                    <div class="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-6 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                      <lucide-icon [name]="benefit.icon" class="w-5 h-5 text-accent-primary"></lucide-icon>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                      {{ benefit.title }}
                    </h3>
                    <p class="text-text-secondary leading-relaxed text-sm">
                      {{ benefit.description }}
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Right Visual - Floating System Diagram -->
          <div class="lg:col-span-5 relative">
            <div
              id="solution-visual"
              class="relative aspect-square max-w-[500px] mx-auto opacity-0"
            >
              <!-- Abstract Infra System -->
              <div class="absolute inset-0 flex items-center justify-center">
                <!-- Central Node -->
                <div 
                  id="solution-central-node"
                  class="w-40 h-40 rounded-[32px] bg-bg-elevated border border-accent-primary/30 flex items-center justify-center relative z-10 shadow-2xl"
                >
                  <div class="w-20 h-20 rounded-2xl bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center">
                    <lucide-icon [name]="RocketIcon" class="w-10 h-10 text-accent-primary"></lucide-icon>
                  </div>
                  
                  <!-- Pulse effect -->
                  <div 
                    id="solution-pulse"
                    class="absolute inset-0 rounded-[32px] border border-accent-primary/50"
                  ></div>
                </div>

                <!-- Connected Modules -->
                @for (angle of [0, 90, 180, 270]; track $index; let i = $index) {
                  <div
                    class="absolute w-28 h-28 solution-module opacity-0"
                    [style.transform]="'rotate(' + angle + 'deg) translateY(-160px) rotate(-' + angle + 'deg)'"
                  >
                    <div 
                      class="w-full h-full rounded-2xl bg-bg-elevated border border-border-subtle flex items-center justify-center relative group overflow-hidden shadow-xl module-inner"
                    >
                      <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent"></div>
                      <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                         <div class="w-4 h-4 rounded-full bg-accent-primary/20 border border-accent-primary/40"></div>
                      </div>
                      
                      <!-- Connection Line -->
                      <div 
                        class="absolute w-px h-20 bg-gradient-to-b from-accent-primary/50 to-transparent"
                        style="top: 100%; left: 50%; transform: translateX(-50%)"
                      ></div>
                    </div>
                  </div>
                }

                <!-- Floating Indicators -->
                <div class="absolute z-20 px-3 py-1.5 rounded-lg bg-bg-elevated/80 backdrop-blur-md border border-white/10 shadow-xl flex flex-col top-0 -right-4 floating-indicator opacity-0">
                  <span class="text-[9px] uppercase tracking-wider text-gray-500 font-bold">Déploiement</span>
                  <div class="flex items-center gap-1.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-xs font-bold text-white">Automatisé</span>
                  </div>
                </div>
                <div class="absolute z-20 px-3 py-1.5 rounded-lg bg-bg-elevated/80 backdrop-blur-md border border-white/10 shadow-xl flex flex-col bottom-12 -left-8 floating-indicator opacity-0">
                  <span class="text-[9px] uppercase tracking-wider text-gray-500 font-bold">Sécurité</span>
                  <div class="flex items-center gap-1.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-xs font-bold text-white">Actif</span>
                  </div>
                </div>
                <div class="absolute z-20 px-3 py-1.5 rounded-lg bg-bg-elevated/80 backdrop-blur-md border border-white/10 shadow-xl flex flex-col top-24 -left-12 floating-indicator opacity-0">
                  <span class="text-[9px] uppercase tracking-wider text-gray-500 font-bold">Supervision</span>
                  <div class="flex items-center gap-1.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-xs font-bold text-white">En direct</span>
                  </div>
                </div>
                <div class="absolute z-20 px-3 py-1.5 rounded-lg bg-bg-elevated/80 backdrop-blur-md border border-white/10 shadow-xl flex flex-col bottom-0 -right-8 floating-indicator opacity-0">
                  <span class="text-[9px] uppercase tracking-wider text-gray-500 font-bold">Stack</span>
                  <div class="flex items-center gap-1.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-xs font-bold text-white">Détectée</span>
                  </div>
                </div>
              </div>

              <!-- Background Glow -->
              <div class="absolute inset-0 bg-accent-primary/10 blur-[120px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        <!-- Bottom Punchline -->
        <div
          id="solution-footer"
          class="mt-32 text-center border-t border-border-subtle pt-16 opacity-0"
        >
          <p class="text-2xl md:text-3xl font-medium text-text-primary max-w-[900px] mx-auto leading-tight tracking-tight">
            CloudNaaba ne remplace pas votre projet. <br class="hidden md:block" />
            <span class="text-accent-primary">Il rend son exploitation plus fiable, plus lisible et plus durable.</span>
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolutionSection implements AfterViewInit {
  readonly RocketIcon = Rocket;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly BarChart3Icon = BarChart3;

  benefits = [
    {
      title: "Déployez plus facilement",
      description: "Mettez vos applications en ligne dans un cadre clair, sans manipulation serveur complexe.",
      icon: Rocket
    },
    {
      title: "Sécurisez par défaut",
      description: "Certificats, bonnes pratiques et base d’exploitation sont intégrés dès le départ.",
      icon: ShieldCheck
    },
    {
      title: "Gardez le contrôle",
      description: "Supervision, visibilité et cadre stable pour faire évoluer vos services sereinement.",
      icon: BarChart3
    }
  ];

  ngAfterViewInit() {
    // Header animation
    animate('#solution-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    // Benefits cards animation
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.5, delay: 0.1 + (i * 0.1), ease: "easeOut" }
      );
    });

    // Visual animation
    animate('#solution-visual', 
      { opacity: [0, 1], scale: [0.9, 1] },
      { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    );

    // Central node floating
    animate('#solution-central-node', 
      { y: [0, -15, 0], rotateZ: [0, 2, 0] },
      { duration: 6, repeat: Infinity, ease: "easeInOut" }
    );

    // Pulse effect
    animate('#solution-pulse', 
      { scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] },
      { duration: 3, repeat: Infinity }
    );

    // Modules animation
    const modules = document.querySelectorAll('.solution-module');
    modules.forEach((module, i) => {
      animate(module, 
        { opacity: [0, 1] },
        { delay: 0.5 + (i * 0.1), duration: 0.5 }
      );
      
      const inner = module.querySelector('.module-inner');
      if (inner) {
        animate(inner, 
          { y: [0, i % 2 === 0 ? 10 : -10, 0], rotate: [0, i % 2 === 0 ? 5 : -5, 0] },
          { duration: 5 + i, repeat: Infinity, ease: "easeInOut" }
        );
      }
    });

    // Indicators animation
    const indicators = document.querySelectorAll('.floating-indicator');
    indicators.forEach((indicator, i) => {
      animate(indicator, 
        { opacity: [0, 1], y: [10, 0] },
        { delay: 0.8 + (i * 0.2), duration: 0.5 }
      );
    });

    // Footer animation
    animate('#solution-footer', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: 0.4, ease: "easeOut" }
    );
  }
}
