import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';

@Component({
  selector: 'app-compatibility',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="compatibility" class="py-48 relative overflow-hidden bg-bg-primary">
      <!-- Scan line effect -->
      <div 
        id="scan-line"
        class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent pointer-events-none z-0"
      ></div>

      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <!-- Header Section -->
        <div 
          id="compat-header"
          class="text-center mb-24 opacity-0"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            Vos équipes gardent <span class="text-accent-primary">leurs habitudes.</span>
          </h2>
          <p class="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
            CloudNaaba s’adapte aux technologies courantes pour éviter d’imposer des changements inutiles à vos équipes.
          </p>
        </div>

        <!-- Tech Stack Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          @for (tech of technologies; track tech.name; let i = $index) {
            <div
              class="group p-8 premium-card text-center flex flex-col items-center gap-6 relative overflow-hidden tech-card opacity-0"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-border-subtle group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-all duration-300">
                <img 
                  [src]="'https://cdn.simpleicons.org/' + tech.slug + '/' + tech.color"
                  [alt]="tech.name"
                  class="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                  referrerpolicy="no-referrer"
                />
                
                <!-- Pulse Effect on Hover -->
                <div 
                  class="absolute inset-0 rounded-2xl border border-accent-primary/50 opacity-0 group-hover:opacity-100 tech-pulse"
                ></div>
              </div>
              <span class="relative z-10 font-bold text-lg text-text-secondary group-hover:text-text-primary transition-colors tracking-tight">
                {{ tech.name }}
              </span>
            </div>
          }
          
          <!-- Empty slot -->
          <div
            class="p-8 rounded-2xl border border-dashed border-border-subtle flex items-center justify-center tech-card opacity-0"
          >
            <span class="text-text-secondary/20 text-sm uppercase tracking-[0.2em] font-bold">Et plus encore...</span>
          </div>
        </div>

        <!-- Docker Highlight Block -->
        <div
          id="docker-card"
          class="group relative p-10 premium-card overflow-hidden opacity-0"
        >
          <!-- Subtle glow -->
          <div class="absolute -inset-4 bg-accent-primary/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none"></div>
          
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex items-center gap-8">
              <div class="w-20 h-20 rounded-2xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                <img 
                  src="https://cdn.simpleicons.org/docker/2496ED"
                  alt="Docker"
                  class="w-12 h-12"
                  referrerpolicy="no-referrer"
                />
              </div>
              <div class="text-center md:text-left">
                <h3 class="text-2xl font-bold text-text-primary mb-2 tracking-tight">Docker</h3>
                <p class="text-text-secondary text-lg">Déploiements standardisés et environnements sur mesure.</p>
              </div>
            </div>
            <div class="px-6 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-widest">
              Standard natif
            </div>
          </div>
        </div>

        <!-- Final Statement -->
        <div 
          id="compat-footer"
          class="mt-24 text-center opacity-0"
        >
          <p class="text-text-secondary/60 text-lg font-medium">
            Votre technologie ne devrait pas être un obstacle à un déploiement propre.
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Compatibility implements AfterViewInit {
  technologies = [
    { name: "Node.js", slug: "node-dot-js", color: "339933" },
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "PHP", slug: "php", color: "777BB4" },
    { name: "Go", slug: "go", color: "00ADD8" },
    { name: "Ruby", slug: "ruby", color: "CC342D" },
    { name: "Java", slug: "openjdk", color: "007396" },
    { name: "Rust", slug: "rust", color: "FFFFFF" }
  ];

  ngAfterViewInit() {
    // Scan line animation
    animate('#scan-line', 
      { y: ['-100%', '1000%'] },
      { duration: 10, repeat: Infinity, ease: "linear" }
    );

    // Header animation
    animate('#compat-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    // Tech cards animation
    const cards = document.querySelectorAll('.tech-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], scale: [0.95, 1] },
        { duration: 0.4, delay: i * 0.05, ease: "easeOut" }
      );
    });

    // Pulses animation
    const pulses = document.querySelectorAll('.tech-pulse');
    pulses.forEach((pulse) => {
      animate(pulse, 
        { scale: [1, 1.2, 1], opacity: [0, 0.5, 0] },
        { duration: 2, repeat: Infinity }
      );
    });

    // Docker card animation
    animate('#docker-card', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: 0.5, ease: "easeOut" }
    );

    // Footer animation
    animate('#compat-footer', 
      { opacity: [0, 1] },
      { duration: 1, delay: 0.8, ease: "easeOut" }
    );
  }
}
