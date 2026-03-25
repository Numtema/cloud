import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, ArrowRight, PlayCircle } from 'lucide-angular';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-48 bg-bg-primary relative overflow-hidden">
      <!-- Large radial glow background -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent-primary/10 rounded-full blur-[180px] pointer-events-none"></div>
      
      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div class="max-w-[1000px] mx-auto text-center">
          <div
            id="final-cta-card"
            class="premium-card p-16 md:p-24 relative overflow-hidden group opacity-0"
          >
            <!-- Animated background sweep -->
            <div 
              id="cta-sweep"
              class="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/5 to-transparent -translate-x-full"
            ></div>

            <div class="relative z-10">
              <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-10 tracking-tight">
                Donnez à votre projet une base <span class="text-accent-primary italic">plus sérieuse.</span>
              </h2>
              <p class="text-text-secondary text-xl md:text-2xl max-w-[750px] mx-auto mb-16 leading-relaxed font-medium">
                Vous n’avez pas besoin de complexifier votre exploitation pour la rendre professionnelle. CloudNaaba s'occupe de la structure, vous vous occupez du produit.
              </p>
              
              <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <button 
                  class="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white text-black font-black text-xl hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-accent-primary/20 tracking-tight flex items-center justify-center gap-3 hover:-translate-y-0.5 active:scale-95"
                >
                  Démarrer maintenant
                  <lucide-icon [name]="ArrowRightIcon" class="w-6 h-6"></lucide-icon>
                </button>
                <button 
                  class="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white/5 text-text-primary font-bold text-xl hover:bg-white/10 border border-white/10 transition-all duration-300 tracking-tight flex items-center justify-center gap-3 hover:-translate-y-0.5 active:scale-95"
                >
                  Voir la démo
                  <lucide-icon [name]="PlayCircleIcon" class="w-6 h-6 opacity-60"></lucide-icon>
                </button>
              </div>

              <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-accent-primary"></div>
                  <span class="text-xs font-bold uppercase tracking-[0.3em]">Souveraineté</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-accent-primary"></div>
                  <span class="text-xs font-bold uppercase tracking-[0.3em]">Sécurité</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-accent-primary"></div>
                  <span class="text-xs font-bold uppercase tracking-[0.3em]">Simplicité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalCTA implements AfterViewInit {
  readonly ArrowRightIcon = ArrowRight;
  readonly PlayCircleIcon = PlayCircle;

  ngAfterViewInit() {
    // Card animation
    animate('#final-cta-card', 
      { opacity: [0, 1], scale: [0.95, 1] },
      { duration: 0.8, ease: "easeOut" }
    );

    // Sweep animation on hover (simulated with interval or just one-off)
    const card = document.querySelector('#final-cta-card');
    if (card) {
      card.addEventListener('mouseenter', () => {
        animate('#cta-sweep', 
          { x: ['-100%', '100%'] },
          { duration: 1, ease: "easeInOut" }
        );
      });
    }
  }
}
