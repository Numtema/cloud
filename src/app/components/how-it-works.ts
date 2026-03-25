import { ChangeDetectionStrategy, Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, GitBranch, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="how-it-works" class="py-32 bg-bg-primary relative overflow-hidden">
      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div class="text-center mb-24">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            Une mise en route <span class="text-accent-primary">maîtrisée.</span>
          </h2>
          <p class="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
            Passez du code à l’exploitation en trois étapes claires, sans friction technique.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <!-- Left: Stepper -->
          <div class="lg:col-span-5 space-y-6 relative">
            <!-- Timeline Line Pro -->
            <div class="absolute left-[39px] top-10 bottom-10 w-px bg-white/5 overflow-hidden">
              <div 
                id="timeline-progress"
                class="w-full h-full bg-gradient-to-b from-accent-primary via-accent-primary to-transparent -translate-y-full"
              ></div>
            </div>

            @for (step of steps; track step.id) {
              <div
                (click)="setActiveStep(step.id)"
                (keydown.enter)="setActiveStep(step.id)"
                (keydown.space)="setActiveStep(step.id); $event.preventDefault()"
                tabindex="0"
                role="button"
                class="group relative p-8 rounded-2xl cursor-pointer transition-all duration-300 border step-item opacity-0 focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
                [class.bg-bg-elevated]="activeStep() === step.id"
                [class.border-accent-primary/30]="activeStep() === step.id"
                [class.shadow-2xl]="activeStep() === step.id"
                [class.bg-transparent]="activeStep() !== step.id"
                [class.border-transparent]="activeStep() !== step.id"
                [class.hover:bg-white/5]="activeStep() !== step.id"
              >
                <div class="flex items-start gap-6 relative z-10">
                  <div 
                    class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 border"
                    [class.bg-accent-primary]="activeStep() === step.id"
                    [class.text-white]="activeStep() === step.id"
                    [class.shadow-[0_0_20px_rgba(124,58,237,0.4)]]="activeStep() === step.id"
                    [class.bg-bg-elevated]="activeStep() !== step.id"
                    [class.text-text-secondary]="activeStep() !== step.id"
                    [class.border-border-subtle]="activeStep() !== step.id"
                    [class.group-hover:border-accent-primary/30]="activeStep() !== step.id"
                  >
                    <lucide-icon [name]="step.icon" class="w-6 h-6"></lucide-icon>
                    <!-- Glowing Dot Node -->
                    @if (activeStep() === step.id) {
                      <div 
                        id="active-dot"
                        class="absolute -left-[31px] w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                      ></div>
                    }
                  </div>
                  <div>
                    <h3 
                      class="text-2xl font-bold mb-3 transition-colors tracking-tight"
                      [class.text-text-primary]="activeStep() === step.id"
                      [class.text-text-secondary]="activeStep() !== step.id"
                    >
                      {{ step.title }}
                    </h3>
                    <p 
                      class="text-lg leading-relaxed transition-colors"
                      [class.text-text-secondary]="activeStep() === step.id"
                      [class.text-text-secondary/60]="activeStep() !== step.id"
                    >
                      {{ step.description }}
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Right: Visual Preview -->
          <div class="lg:col-span-7 sticky top-32">
            <div
              class="relative aspect-[16/10] rounded-3xl bg-bg-elevated border border-border-subtle shadow-2xl overflow-hidden group"
            >
              <!-- Micro Grid Background -->
              <div class="absolute inset-0 opacity-[0.03]" 
                   style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 24px 24px">
              </div>
              
              <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent"></div>
              
              <div class="relative h-full p-10 flex items-center justify-center">
                @if (activeStep() === 1) {
                  <div 
                    id="preview-1"
                    class="relative w-full max-w-[300px] aspect-square flex items-center justify-center"
                  >
                    <div class="absolute inset-0 bg-accent-primary/20 rounded-full blur-[60px]"></div>
                    <div class="relative z-10 p-8 rounded-3xl bg-black border border-accent-primary/30 shadow-2xl">
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <lucide-icon [name]="GitBranchIcon" class="text-accent-primary w-6 h-6"></lucide-icon>
                        </div>
                        <div class="h-2 w-24 bg-white/10 rounded"></div>
                      </div>
                      <div class="space-y-3">
                        <div class="h-1.5 w-full bg-white/5 rounded"></div>
                        <div class="h-1.5 w-4/5 bg-white/5 rounded"></div>
                        <div class="h-1.5 w-2/3 bg-white/5 rounded"></div>
                      </div>
                      <div class="mt-8 flex justify-end">
                        <div class="px-4 py-2 rounded-lg bg-accent-primary text-[10px] font-bold text-white">Connecté</div>
                      </div>
                    </div>
                  </div>
                }

                @if (activeStep() === 2) {
                  <div 
                    id="preview-2"
                    class="relative w-full max-w-[300px] aspect-square flex items-center justify-center"
                  >
                    <div class="absolute inset-0 bg-accent-primary/20 rounded-full blur-[60px]"></div>
                    <div class="relative z-10 p-8 rounded-3xl bg-black border border-accent-primary/30 shadow-2xl w-full">
                      <div class="flex items-center justify-between mb-8">
                        <lucide-icon [name]="ShieldIcon" class="text-accent-primary w-8 h-8"></lucide-icon>
                        <div class="text-[10px] font-mono text-accent-primary/60 tracking-widest">SÉCURITÉ_ACTIVE</div>
                      </div>
                      <div class="space-y-4">
                        <div class="flex items-center justify-between">
                          <div class="h-1.5 w-20 bg-white/10 rounded"></div>
                          <div class="w-8 h-4 bg-accent-primary/40 rounded-full"></div>
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="h-1.5 w-24 bg-white/10 rounded"></div>
                          <div class="w-8 h-4 bg-accent-primary rounded-full"></div>
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="h-1.5 w-16 bg-white/10 rounded"></div>
                          <div class="w-8 h-4 bg-accent-primary rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                }

                @if (activeStep() === 3) {
                  <div 
                    id="preview-3"
                    class="relative w-full max-w-[300px] aspect-square flex items-center justify-center"
                  >
                    <div class="absolute inset-0 bg-accent-primary/20 rounded-full blur-[60px]"></div>
                    <div class="relative z-10 p-8 rounded-3xl bg-black border border-accent-primary/30 shadow-2xl text-center">
                      <div class="w-16 h-16 rounded-full bg-accent-primary/20 flex items-center justify-center mx-auto mb-6">
                        <lucide-icon [name]="CheckCircle2Icon" class="text-accent-primary w-8 h-8"></lucide-icon>
                      </div>
                      <h4 class="text-white font-bold mb-2">Service en ligne</h4>
                      <p class="text-accent-primary/60 text-[10px] font-mono mb-6">https://app.cloudnaaba.io</p>
                      <div class="flex justify-center gap-2">
                        @for (i of [1,2,3,4,5]; track i) {
                          <div 
                            class="w-1 bg-accent-primary/40 rounded-full bar-item"
                            [attr.data-index]="i"
                            style="height: 4px"
                          ></div>
                        }
                      </div>
                    </div>
                  </div>
                }
              </div>

              <!-- Final CTA hint -->
              @if (activeStep() === 3) {
                <div 
                  id="cta-hint"
                  class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
                >
                  <button class="btn-primary px-6 py-2 text-sm font-bold text-white flex items-center gap-2">
                    Voir comment démarrer
                    <lucide-icon [name]="ArrowRightIcon" class="w-4 h-4"></lucide-icon>
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorks implements AfterViewInit {
  readonly GitBranchIcon = GitBranch;
  readonly ShieldIcon = Shield;
  readonly ZapIcon = Zap;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly ArrowRightIcon = ArrowRight;

  activeStep = signal(1);

  steps = [
    {
      id: 1,
      title: "Connectez votre source",
      description: "Liez votre dépôt GitHub ou GitLab en un clic. CloudNaaba détecte automatiquement votre stack.",
      icon: GitBranch,
      preview: "git-connect"
    },
    {
      id: 2,
      title: "Configurez votre cadre",
      description: "Définissez vos variables d'environnement et vos besoins en ressources. Pas de fichiers YAML complexes.",
      icon: Shield,
      preview: "config-env"
    },
    {
      id: 3,
      title: "Déployez & Exploitez",
      description: "CloudNaaba construit, sécurise et met en ligne votre application. La supervision commence immédiatement.",
      icon: Zap,
      preview: "deploy-live"
    }
  ];

  setActiveStep(id: number) {
    this.activeStep.set(id);
    this.animatePreview(id);
  }

  animatePreview(id: number) {
    setTimeout(() => {
      const selector = `#preview-${id}`;
      animate(selector, 
        { opacity: [0, 1], scale: [0.95, 1], y: [20, 0] },
        { duration: 0.4, ease: "easeOut" }
      );
      
      if (id === 3) {
        const bars = document.querySelectorAll('.bar-item');
        bars.forEach((bar, i) => {
          animate(bar, 
            { height: [4, 12, 4] },
            { duration: 1, repeat: Infinity, delay: i * 0.1 }
          );
        });
        animate('#cta-hint', { opacity: [0, 1], y: [10, 0] }, { duration: 0.5, delay: 0.3 });
      }
    }, 0);
  }

  ngAfterViewInit() {
    // Timeline progress animation
    animate('#timeline-progress', 
      { y: ['-100%', '0%'] },
      { duration: 1.5, ease: "easeInOut" }
    );

    // Steps animation
    const items = document.querySelectorAll('.step-item');
    items.forEach((item, i) => {
      animate(item, 
        { opacity: [0, 1], x: [-20, 0], rotate: [0.5, 0] },
        { delay: (i + 1) * 0.1, duration: 0.42, ease: [0.22, 1, 0.36, 1] }
      );
    });

    // Active dot animation
    this.animateActiveDot();
    
    // Initial preview animation
    this.animatePreview(1);
  }

  animateActiveDot() {
    const dot = document.querySelector('#active-dot');
    if (dot) {
      animate(dot, 
        { scale: [1, 1.5, 1] },
        { duration: 2.5, repeat: Infinity }
      );
    }
  }
}
