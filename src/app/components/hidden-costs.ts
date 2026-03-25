import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, Clock, User, ShieldAlert, TrendingUp, ShieldCheck } from 'lucide-angular';

@Component({
  selector: 'app-hidden-costs',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-32 relative overflow-hidden bg-bg-primary">
      <!-- Animated background glow sweep -->
      <div 
        id="glow-sweep"
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent pointer-events-none skew-x-12 opacity-0"
      ></div>

      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <!-- Header Section -->
        <div 
          id="costs-header"
          class="text-center mb-24 opacity-0"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 max-w-[1000px] mx-auto tracking-tight">
            Quand l’infrastructure n’est pas cadrée, <br class="hidden md:block" />
            le coût ne se voit pas tout de suite. <span class="text-accent-primary">Mais il existe.</span>
          </h2>
          <p class="text-text-secondary text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
            Vous ne le payez pas en facture directe. <br class="hidden md:block" />
            Vous le payez en temps, en dépendance, en risque et en ralentissement.
          </p>
        </div>

        <!-- Grid Section -->
        <div 
          class="grid grid-cols-1 md:grid-cols-6 gap-8 mb-24"
        >
          <!-- Top Row: 3 cards -->
          @for (cost of costs.slice(0, 3); track cost.title; let i = $index) {
            <div
              class="md:col-span-2 group relative p-10 premium-card overflow-hidden cost-card opacity-0"
            >
              <!-- Impact Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <lucide-icon [name]="cost.icon" class="w-6 h-6 text-accent-primary"></lucide-icon>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight relative inline-block">
                  {{ cost.title }}
                  <!-- Animated Underline -->
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p class="text-text-secondary leading-relaxed text-lg">
                  {{ cost.description }}
                </p>
              </div>
            </div>
          }

          <!-- Bottom Row: 2 cards centered -->
          @for (cost of costs.slice(3, 5); track cost.title; let i = $index) {
            <div
              [class]="'md:col-span-2 ' + (i === 0 ? 'md:col-start-2' : '') + ' group relative p-10 premium-card overflow-hidden cost-card opacity-0'"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <lucide-icon [name]="cost.icon" class="w-6 h-6 text-accent-primary"></lucide-icon>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight relative inline-block">
                  {{ cost.title }}
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p class="text-text-secondary leading-relaxed text-lg">
                  {{ cost.description }}
                </p>
              </div>
            </div>
          }
        </div>

        <!-- Final Impact Line -->
        <div 
          id="costs-footer"
          class="text-center border-t border-white/5 pt-24 opacity-0"
        >
          <p class="text-2xl md:text-3xl font-medium text-text-primary max-w-[950px] mx-auto leading-tight tracking-tight">
            Le coût réel n’est pas visible immédiatement. <br class="hidden md:block" />
            <span class="text-accent-primary">Mais il s’accumule, fragilise votre activité et freine votre croissance.</span>
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HiddenCosts implements AfterViewInit {
  readonly ClockIcon = Clock;
  readonly UserIcon = User;
  readonly ShieldAlertIcon = ShieldAlert;
  readonly TrendingUpIcon = TrendingUp;
  readonly ShieldCheckIcon = ShieldCheck;

  costs = [
    {
      title: "Temps perdu en continu",
      description: "Corrections, redéploiements, vérifications, relances… Vos équipes passent plus de temps à maintenir qu’à construire.",
      icon: Clock
    },
    {
      title: "Dépendance à une personne clé",
      description: "Un développeur, un prestataire, une personne clé devient un point de fragilité. Le projet dépend plus d’un individu que d’un système.",
      icon: User
    },
    {
      title: "Risque opérationnel invisible",
      description: "Certificat oublié, configuration fragile, sauvegarde absente… Une simple erreur peut impacter toute votre activité.",
      icon: ShieldAlert
    },
    {
      title: "Croissance technique limitée",
      description: "Ce qui fonctionne au début devient difficile à faire évoluer proprement. Chaque changement devient risqué.",
      icon: TrendingUp
    },
    {
      title: "Crédibilité affaiblie",
      description: "Un service lent, instable ou mal sécurisé affecte directement la confiance de vos utilisateurs et partenaires.",
      icon: ShieldCheck
    }
  ];

  ngAfterViewInit() {
    // Glow sweep animation
    animate('#glow-sweep', 
      { x: ['-100%', '100%'], opacity: [0, 0.1, 0] },
      { duration: 10, repeat: Infinity, ease: "linear" }
    );

    // Header animation
    animate('#costs-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.7, ease: "easeOut" }
    );

    // Cards animation
    const cards = document.querySelectorAll('.cost-card');
    cards.forEach((card, i) => {
      animate(card, 
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.42, delay: 0.2 + (i * 0.07), ease: [0.22, 1, 0.36, 1] }
      );
    });

    // Footer animation
    animate('#costs-footer', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: 0.5, ease: "easeOut" }
    );
  }
}
