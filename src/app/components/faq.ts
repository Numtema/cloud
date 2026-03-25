import { ChangeDetectionStrategy, Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate } from 'motion';
import { LucideAngularModule, ChevronDown, HelpCircle } from 'lucide-angular';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="faq-section" class="py-48 bg-bg-primary relative overflow-hidden">
      <div class="container mx-auto max-w-[900px] px-6 relative z-10">
        
        <!-- Header -->
        <div 
          id="faq-header"
          class="text-center mb-24 opacity-0"
        >
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <lucide-icon [name]="HelpCircleIcon" class="w-4 h-4"></lucide-icon>
            <span>FAQ</span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            Questions <span class="text-accent-primary">fréquentes.</span>
          </h2>
          <p class="text-text-secondary text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed">
            Les points qui reviennent le plus souvent avant de démarrer avec CloudNaaba.
          </p>
        </div>

        <!-- Highlight Chips -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          @for (chip of highlights; track chip.id) {
            <button
              (click)="scrollToAndOpen(chip.id)"
              class="px-6 py-2.5 rounded-full bg-white/[0.03] border border-border-subtle text-sm font-bold text-text-secondary hover:text-text-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-300 tracking-tight"
            >
              {{ chip.label }}
            </button>
          }
        </div>

        <!-- Accordion List -->
        <div class="mb-24">
          @for (faq of faqs; track faq.id) {
            <div
              class="premium-card overflow-hidden transition-all duration-500 mb-4 faq-item opacity-0"
              [class.border-accent-primary/30]="openId() === faq.id"
              [class.bg-accent-primary-02]="openId() === faq.id"
              [class.hover:border-white-10]="openId() !== faq.id"
            >
              <button
                (click)="toggleId(faq.id)"
                class="w-full p-8 text-left flex items-center justify-between group"
              >
                <span 
                  class="text-xl font-bold transition-colors duration-300"
                  [class.text-text-primary]="openId() === faq.id"
                  [class.text-text-secondary]="openId() !== faq.id"
                  [class.group-hover:text-text-primary]="openId() !== faq.id"
                >
                  {{ faq.question }}
                </span>
                <div 
                  class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500"
                  [class.bg-accent-primary]="openId() === faq.id"
                  [class.text-white]="openId() === faq.id"
                  [class.rotate-180]="openId() === faq.id"
                  [class.bg-white-05]="openId() !== faq.id"
                  [class.text-text-secondary]="openId() !== faq.id"
                  [class.group-hover:bg-white-10]="openId() !== faq.id"
                >
                  <lucide-icon [name]="ChevronDownIcon" class="w-5 h-5"></lucide-icon>
                </div>
              </button>
              
              @if (openId() === faq.id) {
                <div 
                  class="px-8 pb-8 text-lg text-text-secondary leading-relaxed border-t border-white/5 pt-6"
                  id="faq-answer-{{faq.id}}"
                >
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>

        <!-- Final Reassurance -->
        <div 
          id="faq-footer"
          class="text-center p-12 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-border-subtle opacity-0"
        >
          <p class="text-text-secondary text-xl md:text-2xl leading-relaxed italic font-medium">
            "Vous n’avez pas besoin de tout anticiper dès le départ. <br class="hidden md:block" />
            <span class="text-text-primary">CloudNaaba est conçu pour vous accompagner dans la durée.</span>"
          </p>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .bg-accent-primary-02 { background-color: rgba(124, 58, 237, 0.02); }
    .hover:border-white-10:hover { border-color: rgba(255, 255, 255, 0.1); }
    .bg-white-05 { background-color: rgba(255, 255, 255, 0.05); }
    .group-hover:bg-white-10:hover { background-color: rgba(255, 255, 255, 0.1); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FAQ implements AfterViewInit {
  readonly ChevronDownIcon = ChevronDown;
  readonly HelpCircleIcon = HelpCircle;

  openId = signal<string | null>("hosting");

  faqs = [
    {
      id: "hosting",
      question: "Est-ce que CloudNaaba est juste un hébergement ?",
      answer: "Non. CloudNaaba ajoute une couche d’exploitation : déploiement, sécurité, supervision et continuité. L’hébergement seul ne couvre pas ces éléments essentiels à la stabilité de votre activité."
    },
    {
      id: "expertise",
      question: "Faut-il une équipe technique avancée pour l’utiliser ?",
      answer: "Non. La plateforme est conçue pour des structures qui veulent déployer sérieusement sans dépendre d’une expertise infra lourde. Nous automatisons la complexité pour vous laisser vous concentrer sur votre produit."
    },
    {
      id: "data",
      question: "Est-ce que je garde la maîtrise de mes données ?",
      answer: "Oui. La maîtrise et la réversibilité sont des principes clés de CloudNaaba. Vous gardez le contrôle total sur vos données, vos services et votre configuration. Pas de verrouillage propriétaire."
    },
    {
      id: "pme",
      question: "Est-ce adapté à une PME ?",
      answer: "Oui. CloudNaaba est pensé pour les entreprises qui ont des projets numériques importants sans équipe d’exploitation complète. C'est le partenaire idéal pour stabiliser votre croissance technique."
    },
    {
      id: "sensitive",
      question: "Est-ce adapté à des projets sensibles ?",
      answer: "Oui. Dès qu’il y a des enjeux de sécurité, de continuité ou de gouvernance, un cadre d’exploitation plus structuré devient essentiel. CloudNaaba fournit ce cadre par défaut."
    },
    {
      id: "price",
      question: "Pourquoi ne pas simplement prendre un serveur moins cher ?",
      answer: "Parce que le coût réel ne se limite pas au serveur. Il inclut la gestion, les risques d'interruption, les erreurs de configuration et la dépendance humaine — des coûts cachés que CloudNaaba réduit drastiquement."
    }
  ];

  highlights = [
    { id: "data", label: "Maîtrise des données" },
    { id: "expertise", label: "Besoin d'experts ?" },
    { id: "sensitive", label: "Projets critiques" }
  ];

  toggleId(id: string) {
    this.openId.set(this.openId() === id ? null : id);
    if (this.openId() === id) {
      setTimeout(() => {
        animate(`#faq-answer-${id}`, 
          { height: [0, 'auto'], opacity: [0, 1] },
          { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
        );
      }, 0);
    }
  }

  scrollToAndOpen(id: string) {
    this.openId.set(id);
    const element = document.getElementById('faq-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.toggleId(id);
  }

  ngAfterViewInit() {
    // Header animation
    animate('#faq-header', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    // FAQ items animation
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, i) => {
      animate(item, 
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
      );
    });

    // Footer animation
    animate('#faq-footer', 
      { opacity: [0, 1] },
      { duration: 1, delay: 0.5, ease: "easeOut" }
    );
  }
}
