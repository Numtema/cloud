import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, Rocket, Layers, Shield, Eye, RefreshCw, TrendingUp, Unlock } from 'lucide-angular';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="features" class="py-32 relative overflow-hidden bg-bg-primary">
      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <!-- Header Section -->
        <div 
          id="features-header"
          class="text-center mb-24 opacity-0"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            L’essentiel pour exploiter vos applications <span class="text-accent-primary">proprement, dès le départ.</span>
          </h2>
          <p class="text-text-secondary text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
            CloudNaaba intègre les éléments critiques d’exploitation pour éviter les oublis, les manipulations risquées et les configurations fragiles.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (feature of features; track feature.title; let i = $index) {
            <div
              class="group relative p-10 premium-card overflow-hidden h-full feature-card opacity-0"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10">
                <div 
                  class="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors feature-icon"
                >
                  <lucide-icon [name]="feature.icon" class="w-6 h-6 text-accent-primary"></lucide-icon>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {{ feature.title }}
                </h3>
                <p class="text-text-secondary leading-relaxed text-lg">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          }
          
          <!-- Highlighted 7th Feature: Réversibilité -->
          <div
            id="reversibilite-card"
            class="lg:col-span-3 group relative p-10 premium-card flex flex-col md:flex-row items-center gap-10 overflow-hidden opacity-0"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div 
              class="w-20 h-20 rounded-[24px] bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors relative z-10 shrink-0 reversibilite-icon"
            >
              <lucide-icon [name]="UnlockIcon" class="w-10 h-10 text-accent-primary"></lucide-icon>
            </div>
            
            <div class="relative z-10 text-center md:text-left">
              <h3 class="text-2xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                Réversibilité totale
              </h3>
              <p class="text-text-secondary leading-relaxed text-lg max-w-[700px]">
                Vous gardez la maîtrise. Vos données et vos services ne sont jamais enfermés. CloudNaaba est un cadre, pas une prison technique.
              </p>
            </div>

            <!-- Subtle sweep animation -->
            <div class="absolute inset-0 pointer-events-none overflow-hidden">
              <div 
                id="sweep-animation"
                class="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 -translate-x-full"
              ></div>
            </div>
          </div>
        </div>

        <!-- Optional Trust Line -->
        <div 
          id="features-trust"
          class="mt-24 text-center opacity-0"
        >
          <p class="text-sm uppercase tracking-[0.2em] text-white/20 font-bold">
            Un socle d’exploitation propre, pensé pour durer.
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features implements AfterViewInit {
  readonly RocketIcon = Rocket;
  readonly LayersIcon = Layers;
  readonly ShieldIcon = Shield;
  readonly EyeIcon = Eye;
  readonly RefreshCwIcon = RefreshCw;
  readonly TrendingUpIcon = TrendingUp;
  readonly UnlockIcon = Unlock;

  features = [
    {
      title: "Déploiement automatique",
      description: "Chaque mise en ligne est structurée et reproductible, sans manipulation serveur répétitive.",
      icon: Rocket
    },
    {
      title: "Détection intelligente de la stack",
      description: "CloudNaaba identifie votre technologie et prépare l’environnement adapté automatiquement.",
      icon: Layers
    },
    {
      title: "HTTPS et sécurité intégrée",
      description: "La sécurité de base est incluse dès le départ, sans configuration manuelle.",
      icon: Shield
    },
    {
      title: "Supervision et visibilité",
      description: "Vous gardez une vue claire sur l’état de vos services et de vos applications.",
      icon: Eye
    },
    {
      title: "Mises à jour simplifiées",
      description: "Faites évoluer votre projet sans risquer de casser votre production.",
      icon: RefreshCw
    },
    {
      title: "Scalabilité maîtrisée",
      description: "Votre projet peut grandir dans un cadre stable, sans refonte d’infrastructure.",
      icon: TrendingUp
    }
  ];

  ngAfterViewInit() {
    // Header animation
    animate('#features-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    // Features grid animation
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
      );
    });

    // Reversibilite card animation
    animate('#reversibilite-card', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: 0.6, ease: "easeOut" }
    );

    // Sweep animation
    animate('#sweep-animation', 
      { x: ['-100%', '200%'] },
      { duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear" }
    );

    // Trust line animation
    animate('#features-trust', 
      { opacity: [0, 1] },
      { duration: 1, delay: 0.8, ease: "easeOut" }
    );
  }
}
