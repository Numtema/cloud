import { ChangeDetectionStrategy, Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, ArrowRight, CheckCircle2, Play } from 'lucide-angular';
import { GlobeVisual } from './globe-visual';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, GlobeVisual],
  template: `
    <section 
      (mousemove)="handleMouseMove($event)"
      class="relative pt-[140px] pb-[110px] overflow-hidden"
    >
      <!-- Glow follow cursor (hero only) -->
      <div 
        class="pointer-events-none fixed inset-0 z-30 opacity-20"
        [style.background]="cursorGlow()"
      ></div>

      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <!-- Left Content -->
          <div 
            class="lg:col-span-6 flex flex-col items-start"
            id="hero-content"
          >
            <!-- Badge -->
            <div 
              class="inline-flex items-center px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-6 hero-item"
            >
              <span class="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                Plateforme d’exploitation applicative
              </span>
            </div>

            <!-- Headline -->
            <h1 
              class="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-8 hero-item"
            >
              Déployez vos applications <br class="hidden md:block" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary to-accent-primary">
                sans gérer l’infrastructure.
              </span>
            </h1>

            <!-- Subheadline -->
            <p 
              class="text-lg md:text-xl text-text-secondary max-w-[620px] leading-relaxed mb-6 hero-item"
            >
              CloudNaaba permet aux PME et aux organisations exigeantes de déployer sites, plateformes et applications de façon simple, sécurisée et maîtrisée — sans dépendre d’une équipe DevOps complexe.
            </p>

            <!-- Reinforcement -->
            <p 
              class="text-sm font-medium text-text-secondary/60 mb-10 hero-item"
            >
              Lancez plus vite. Réduisez le risque technique. Gardez le contrôle sur vos données et vos services.
            </p>

            <!-- CTA Stack -->
            <div 
              class="flex flex-wrap items-center gap-5 mb-10 hero-item"
            >
              <div class="relative group">
                <!-- Subtle & Controlled Glow Effect -->
                <div class="absolute -inset-1 bg-accent-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div class="absolute -inset-4 bg-accent-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <button class="relative btn-primary px-8 py-4 text-white font-bold flex items-center gap-2">
                  Commencer maintenant
                  <lucide-icon [name]="ArrowRightIcon" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></lucide-icon>
                </button>
              </div>
              
              <button class="btn-secondary px-8 py-4 text-text-primary font-bold">
                Voir les offres
              </button>

              <button class="hidden xl:flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors ml-2">
                <lucide-icon [name]="PlayIcon" class="w-4 h-4 fill-current"></lucide-icon>
                Demander une démo
              </button>
            </div>

            <!-- Trust Chips -->
            <div 
              class="flex flex-wrap items-center gap-6 hero-item"
            >
              <div class="flex items-center gap-2 text-xs font-medium text-gray-500">
                <lucide-icon [name]="CheckCircle2Icon" class="w-4 h-4 text-violet-500/60"></lucide-icon>
                Aucune carte bancaire requise
              </div>
              <div class="flex items-center gap-2 text-xs font-medium text-gray-500">
                <lucide-icon [name]="CheckCircle2Icon" class="w-4 h-4 text-violet-500/60"></lucide-icon>
                Mise en route simple
              </div>
              <div class="flex items-center gap-2 text-xs font-medium text-gray-500">
                <lucide-icon [name]="CheckCircle2Icon" class="w-4 h-4 text-violet-500/60"></lucide-icon>
                Accompagnement possible
              </div>
            </div>
          </div>

          <!-- Right Visual -->
          <div 
            class="lg:col-span-6"
            id="hero-visual"
          >
            <app-globe-visual></app-globe-visual>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements AfterViewInit {
  readonly ArrowRightIcon = ArrowRight;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly PlayIcon = Play;

  mousePos = signal({ x: 0, y: 0 });
  cursorGlow = signal('');

  handleMouseMove(e: MouseEvent) {
    this.mousePos.set({ x: e.clientX, y: e.clientY });
    this.cursorGlow.set(`radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(124, 58, 237, 0.1), transparent 80%)`);
  }

  ngAfterViewInit() {
    // Content animation
    const items = document.querySelectorAll('.hero-item');
    items.forEach((item, i) => {
      animate(item, 
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.42, delay: 0.3 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }
      );
    });

    // Visual animation
    animate('#hero-visual', 
      { opacity: [0, 1], x: [50, 0] },
      { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
    );
  }
}
