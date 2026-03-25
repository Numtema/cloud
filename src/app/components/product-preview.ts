import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, Cloud, Database, Shield, Zap, GitBranch, Terminal } from 'lucide-angular';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-24 bg-[#050505] relative overflow-hidden">
      <!-- Background Glows -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-3xl md:text-5xl font-bold font-display mb-6">
            L'exploitation <span class="text-accent-primary">visuelle & maîtrisée.</span>
          </h2>
          <p class="text-text-secondary text-lg max-w-[700px] mx-auto">
            Une interface qui transforme la complexité de l'infrastructure en un flux logique et sécurisé.
          </p>
        </div>

        <!-- Flow Diagram -->
        <div class="relative min-h-[500px] flex items-center justify-center">
          
          <!-- Central Node - CloudNaaba Engine -->
          <div 
            id="central-node"
            class="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex flex-col items-center justify-center shadow-[0_0_60px_-10px_rgba(124,58,237,0.3)] opacity-0"
          >
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent-primary flex items-center justify-center mb-4">
              <lucide-icon [name]="CloudIcon" class="text-white w-8 h-8 md:w-10 md:h-10"></lucide-icon>
            </div>
            <span class="text-white font-bold text-lg md:text-xl">CloudNaaba Engine</span>
            <span class="text-accent-primary/60 text-xs font-mono mt-2">v2.4.0 Actif</span>
          </div>

          <!-- Surrounding Nodes -->
          <div class="absolute inset-0 flex items-center justify-center">
            
            <!-- Left: Source -->
            <div 
              id="node-left"
              class="absolute -translate-x-[200px] md:-translate-x-[350px] flex flex-col items-center gap-4 opacity-0"
            >
              <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <lucide-icon [name]="GitBranchIcon" class="text-white/60 w-8 h-8"></lucide-icon>
              </div>
              <div class="text-center">
                <p class="text-white font-medium">Code Source</p>
                <p class="text-text-secondary/60 text-xs">GitHub / GitLab</p>
              </div>
            </div>

            <!-- Right: Infrastructure -->
            <div 
              id="node-right"
              class="absolute translate-x-[200px] md:translate-x-[350px] flex flex-col items-center gap-4 opacity-0"
            >
              <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <lucide-icon [name]="DatabaseIcon" class="text-white/60 w-8 h-8"></lucide-icon>
              </div>
              <div class="text-center">
                <p class="text-white font-medium">Infrastructure</p>
                <p class="text-text-secondary/60 text-xs">AWS / GCP / Bare Metal</p>
              </div>
            </div>

            <!-- Top: Security -->
            <div 
              id="node-top"
              class="absolute -translate-y-[180px] md:-translate-y-[220px] flex flex-col items-center gap-4 opacity-0"
            >
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-primary/5 border border-accent-primary/20 flex items-center justify-center">
                <lucide-icon [name]="ShieldIcon" class="text-accent-primary w-6 h-6"></lucide-icon>
              </div>
              <p class="text-accent-primary/80 text-xs font-bold uppercase tracking-widest">Couche de Sécurité</p>
            </div>

            <!-- Bottom: Terminal/Logs -->
            <div 
              id="node-bottom"
              class="absolute translate-y-[180px] md:translate-y-[220px] flex flex-col items-center gap-4 opacity-0"
            >
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center">
                <lucide-icon [name]="TerminalIcon" class="text-white/40 w-6 h-6"></lucide-icon>
              </div>
              <p class="text-text-secondary/40 text-xs font-mono">Logs en temps réel</p>
            </div>
          </div>

          <!-- Connecting Lines (SVG) -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="transparent" />
                <stop offset="50%" stop-color="rgba(124,58,237,0.2)" />
                <stop offset="100%" stop-color="transparent" />
              </linearGradient>
            </defs>
            <!-- Left to Center -->
            <path 
              d="M 200 500 Q 350 500 500 500" 
              stroke="url(#lineGradient)" 
              stroke-width="2" 
              fill="none" 
              stroke-dasharray="10,10"
              id="path-left"
            />
            <!-- Center to Right -->
            <path 
              d="M 500 500 Q 650 500 800 500" 
              stroke="url(#lineGradient)" 
              stroke-width="2" 
              fill="none" 
              stroke-dasharray="10,10"
              id="path-right"
            />
          </svg>
        </div>

        <!-- Feature Grid Below Preview -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <lucide-icon [name]="ZapIcon" class="text-accent-primary w-6 h-6 mb-4"></lucide-icon>
            <h4 class="text-white font-bold mb-2">Déploiement Instantané</h4>
            <p class="text-text-secondary text-sm">Poussez votre code, CloudNaaba s'occupe du reste en quelques secondes.</p>
          </div>
          <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <lucide-icon [name]="ShieldIcon" class="text-accent-primary w-6 h-6 mb-4"></lucide-icon>
            <h4 class="text-white font-bold mb-2">Sécurité Native</h4>
            <p class="text-text-secondary text-sm">Certificats SSL, pare-feu et isolation des conteneurs configurés par défaut.</p>
          </div>
          <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <lucide-icon [name]="DatabaseIcon" class="text-accent-primary w-6 h-6 mb-4"></lucide-icon>
            <h4 class="text-white font-bold mb-2">Multi-Cloud</h4>
            <p class="text-text-secondary text-sm">Déployez sur n'importe quel fournisseur sans changer une ligne de code.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPreview implements AfterViewInit {
  readonly CloudIcon = Cloud;
  readonly DatabaseIcon = Database;
  readonly ShieldIcon = Shield;
  readonly ZapIcon = Zap;
  readonly GitBranchIcon = GitBranch;
  readonly TerminalIcon = Terminal;

  ngAfterViewInit() {
    // Central node animation
    animate('#central-node', 
      { scale: [0.8, 1], opacity: [0, 1] },
      { duration: 0.8, ease: "easeOut" }
    );

    // Surrounding nodes animation
    animate('#node-left', 
      { x: [-100, 0], opacity: [0, 1] },
      { duration: 0.6, delay: 0.2, ease: "easeOut" }
    );
    animate('#node-right', 
      { x: [100, 0], opacity: [0, 1] },
      { duration: 0.6, delay: 0.4, ease: "easeOut" }
    );
    animate('#node-top', 
      { y: [-100, 0], opacity: [0, 1] },
      { duration: 0.6, delay: 0.6, ease: "easeOut" }
    );
    animate('#node-bottom', 
      { y: [100, 0], opacity: [0, 1] },
      { duration: 0.6, delay: 0.8, ease: "easeOut" }
    );

    // Paths animation
    animate('#path-left', 
      { pathLength: [0, 1] },
      { duration: 1.5, repeat: Infinity, ease: "linear" }
    );
    animate('#path-right', 
      { pathLength: [0, 1] },
      { duration: 1.5, repeat: Infinity, ease: "linear" }
    );
  }
}
