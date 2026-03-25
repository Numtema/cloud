import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { animate } from 'motion';
import { LucideAngularModule, Zap, ShieldCheck, Cpu, Database } from 'lucide-angular';

@Component({
  selector: 'app-globe-visual',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center perspective-1000">
      <!-- Background Glow -->
      <div class="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-accent-primary/20 via-transparent to-transparent blur-3xl"></div>
      
      <!-- The Globe Abstraction -->
      <div 
        class="relative w-[85%] h-[85%] rounded-full border border-white/10 bg-black/40 flex items-center justify-center overflow-hidden preserve-3d"
        id="globe-container"
      >
        <!-- Grid lines -->
        <div class="absolute inset-0 opacity-20" 
             style="background-image: radial-gradient(circle, #7c3aed 1px, transparent 1px); background-size: 30px 30px">
        </div>
        
        <!-- West Africa Focus (Simplified SVG) -->
        <svg viewBox="0 0 200 200" class="w-full h-full text-accent-primary/40 fill-current">
          <path 
            d="M80,100 Q90,90 110,100 T140,110 T160,130 T140,160 T100,170 T70,150 T60,120 Z" 
            class="fill-accent-primary/10 stroke-accent-primary/50 stroke-[0.5]"
            id="africa-path"
          />
          
          <!-- Nodes -->
          @for (node of nodes; track $index) {
            <circle
              [attr.cx]="node.x"
              [attr.cy]="node.y"
              r="1.5"
              class="fill-accent-primary opacity-50 node-circle"
            />
          }

          <!-- Arcs -->
          <path
            d="M90,110 Q110,90 130,130"
            fill="none"
            stroke="url(#arcGradient)"
            stroke-width="0.5"
            id="arc-path"
          />
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="transparent" />
              <stop offset="50%" stop-color="#7c3aed" />
              <stop offset="100%" stop-color="transparent" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Inner glow -->
        <div class="absolute inset-0 shadow-[inset_0_0_100px_rgba(124,58,237,0.1)] rounded-full"></div>
      </div>

      <!-- Floating UI Cards -->
      <div class="absolute z-10 premium-card px-4 py-3 flex items-center gap-3 top-[10%] left-[5%] floating-card" id="card-1">
        <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
          <lucide-icon [name]="ZapIcon" class="w-3 h-3 text-green-400"></lucide-icon>
        </div>
        <div class="flex flex-col">
          <span class="text-[10px] text-text-secondary uppercase tracking-wider font-bold">Statut déploiement</span>
          <span class="text-xs font-bold text-text-primary">En ligne</span>
        </div>
      </div>

      <div class="absolute z-10 premium-card px-4 py-3 flex items-center gap-3 top-[40%] -right-[5%] floating-card" id="card-2">
        <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
          <lucide-icon [name]="ShieldCheckIcon" class="w-3 h-3 text-blue-400"></lucide-icon>
        </div>
        <div class="flex flex-col">
          <span class="text-[10px] text-text-secondary uppercase tracking-wider font-bold">HTTPS</span>
          <span class="text-xs font-bold text-text-primary">Actif</span>
        </div>
      </div>

      <div class="absolute z-10 premium-card px-4 py-3 flex items-center gap-3 bottom-[15%] left-[10%] floating-card" id="card-3">
        <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
          <lucide-icon [name]="CpuIcon" class="w-3 h-3 text-accent-primary"></lucide-icon>
        </div>
        <div class="flex flex-col">
          <span class="text-[10px] text-text-secondary uppercase tracking-wider font-bold">Utilisation CPU</span>
          <span class="text-xs font-bold text-text-primary">12%</span>
        </div>
      </div>

      <div class="absolute z-10 premium-card px-4 py-3 flex items-center gap-3 bottom-[30%] -right-[10%] floating-card" id="card-4">
        <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
          <lucide-icon [name]="DatabaseIcon" class="w-3 h-3 text-orange-400"></lucide-icon>
        </div>
        <div class="flex flex-col">
          <span class="text-[10px] text-text-secondary uppercase tracking-wider font-bold">Base de données</span>
          <span class="text-xs font-bold text-text-primary">Saine</span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobeVisual implements AfterViewInit {
  readonly ZapIcon = Zap;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly CpuIcon = Cpu;
  readonly DatabaseIcon = Database;

  nodes = [
    { x: 90, y: 110 }, { x: 110, y: 120 }, { x: 130, y: 130 }, 
    { x: 100, y: 145 }, { x: 120, y: 155 }
  ];

  ngAfterViewInit() {
    // Globe container animation
    animate('#globe-container', 
      { rotateZ: [0, 5, 0] },
      { duration: 20, repeat: Infinity, ease: "linear" }
    );

    // Africa path animation
    animate('#africa-path', 
      { pathLength: [0, 1] },
      { duration: 2, delay: 0.5, ease: "easeOut" }
    );

    // Nodes animation
    const nodeCircles = document.querySelectorAll('.node-circle');
    nodeCircles.forEach((circle, i) => {
      animate(circle, 
        { opacity: [0, 1, 0.5] },
        { repeat: Infinity, duration: 3, delay: i * 0.5 }
      );
    });

    // Arc path animation
    animate('#arc-path', 
      { pathLength: [0, 1] },
      { duration: 6, repeat: Infinity, ease: "linear" }
    );

    // Floating cards animation
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, i) => {
      animate(card, 
        { y: [0, -10, 0] },
        { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
      );
    });
  }
}
