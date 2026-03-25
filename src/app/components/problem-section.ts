import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, User, Shield, Settings, Cloud, Lock } from 'lucide-angular';

@Component({
  selector: 'app-problem-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-32 relative overflow-hidden">
      <!-- Vertical Separator Lines -->
      <div class="absolute inset-0 flex justify-around pointer-events-none opacity-[0.03]">
        <div class="w-px h-full bg-white"></div>
        <div class="w-px h-full bg-white"></div>
        <div class="w-px h-full bg-white"></div>
      </div>

      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <!-- Header Section -->
        <div 
          id="problem-header"
          class="text-center mb-24 flex flex-col items-center opacity-0"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display max-w-[820px] mb-8 leading-[1.1] tracking-tight">
            Votre projet numérique mérite mieux qu’un déploiement fragile.
          </h2>
          <p class="text-text-secondary text-lg md:text-xl max-w-[720px] leading-relaxed">
            Beaucoup d’entreprises investissent dans un site, une application ou un outil métier. 
            Mais une fois en ligne, la même réalité revient : l’exploitation repose sur des bases fragiles.
          </p>
        </div>

        <!-- Grid Cards -->
        <div 
          class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          @for (card of cards; track card.title) {
            <div
              class="group relative p-10 premium-card hover:bg-red-500/[0.02] overflow-hidden problem-card opacity-0"
            >
              <!-- Flicker Glow Effect -->
              <div 
                class="absolute -inset-px rounded-[18px] bg-red-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none flicker-glow"
              ></div>
              
              <!-- Micro Noise Overlay -->
              <div class="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

              <div class="relative z-10">
                <div class="relative w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                  <lucide-icon [name]="card.icon" class="w-6 h-6 text-accent-primary"></lucide-icon>
                  @if (card.secondaryIcon) {
                    <lucide-icon [name]="card.secondaryIcon" class="w-3 h-3 text-accent-primary absolute -bottom-1 -right-1"></lucide-icon>
                  }
                </div>
                <h3 class="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {{ card.title }}
                </h3>
                <p class="text-text-secondary text-lg leading-relaxed">
                  {{ card.description }}
                </p>
              </div>
            </div>
          }
        </div>

        <!-- Bottom Statement -->
        <div 
          id="problem-footer"
          class="text-center opacity-0"
        >
          <div class="inline-block p-1 rounded-full bg-accent-soft border border-accent-primary/10 mb-8">
            <div class="px-4 py-1 rounded-full bg-bg-primary text-xs font-bold uppercase tracking-widest text-accent-primary">
              Le constat
            </div>
          </div>
          <p class="text-2xl md:text-3xl font-medium text-text-primary max-w-[900px] mx-auto leading-tight tracking-tight">
            Le problème n’est pas seulement technique. <br class="hidden md:block" />
            <span class="text-accent-primary">Un service important pour votre activité ne peut pas reposer sur du bricolage.</span>
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemSection implements AfterViewInit {
  readonly UserIcon = User;
  readonly ShieldIcon = Shield;
  readonly SettingsIcon = Settings;
  readonly CloudIcon = Cloud;
  readonly LockIcon = Lock;

  cards = [
    {
      title: "Dépendance à une personne clé",
      description: "Le déploiement et la maintenance reposent souvent sur un développeur ou un prestataire. Si cette personne n’est pas disponible, tout ralentit ou se bloque.",
      icon: User,
      secondaryIcon: Lock
    },
    {
      title: "Sécurité traitée trop tard",
      description: "Certificats, configuration, bonnes pratiques… La sécurité arrive après coup, alors qu’elle devrait faire partie du socle dès le départ.",
      icon: Shield
    },
    {
      title: "Maintenance sans cadre clair",
      description: "Mises à jour, surveillance, gestion des incidents… Personne ne sait vraiment qui fait quoi ni comment réagir en cas de problème.",
      icon: Settings
    },
    {
      title: "Déploiements instables",
      description: "Chaque mise en ligne devient une source de stress : erreurs, oublis, manipulations manuelles, imprévus.",
      icon: Cloud
    }
  ];

  ngAfterViewInit() {
    // Header animation
    animate('#problem-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    // Cards animation
    const cards = document.querySelectorAll('.problem-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.42, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }
      );
    });

    // Footer animation
    animate('#problem-footer', 
      { opacity: [0, 1], scale: [0.95, 1] },
      { duration: 0.5, delay: 0.4, ease: "easeOut" }
    );

    // Flicker glow animation
    const flickers = document.querySelectorAll('.flicker-glow');
    flickers.forEach((flicker) => {
      animate(flicker, 
        { opacity: [0, 0.1, 0.05, 0.1, 0] },
        { duration: 2, repeat: Infinity, ease: "easeInOut" }
      );
    });
  }
}
