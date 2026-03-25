import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="bg-bg-primary pt-32 pb-16 relative overflow-hidden border-t border-border-subtle">
      <!-- Subtle top gradient fade -->
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent-primary/5 to-transparent pointer-events-none"></div>
      
      <!-- Background glow -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          <!-- Brand Section -->
          <div class="lg:col-span-4">
            <div class="flex items-center gap-3 mb-8 group cursor-pointer">
              <div class="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center shadow-lg shadow-accent-primary/20 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                <img 
                  src="https://cdn.phototourl.com/free/2026-03-25-7e6959d3-1a44-44f9-a676-6e8e2acf2388.png" 
                  alt="CloudNaaba" 
                  class="w-full h-full object-contain p-1"
                  referrerpolicy="no-referrer"
                />
              </div>
              <span class="text-2xl font-black text-text-primary tracking-tighter">
                CloudNaaba
              </span>
            </div>
            <p class="text-text-secondary text-lg leading-relaxed mb-10 max-w-[350px] font-medium">
              Déployez vos applications avec plus de simplicité, de sécurité et de maîtrise. Le futur de l'infrastructure souveraine.
            </p>
            <div class="flex items-center gap-4">
              <a 
                href="#" 
                class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <lucide-icon [name]="TwitterIcon" class="w-5 h-5"></lucide-icon>
              </a>
              <a 
                href="#" 
                class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <lucide-icon [name]="LinkedinIcon" class="w-5 h-5"></lucide-icon>
              </a>
              <a 
                href="#" 
                class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <lucide-icon [name]="GithubIcon" class="w-5 h-5"></lucide-icon>
              </a>
            </div>
          </div>

          <!-- Links Grid -->
          <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            @for (column of footerLinks; track column.title) {
              <div>
                <h4 class="text-text-primary font-bold mb-8 uppercase tracking-[0.2em] text-xs">
                  {{ column.title }}
                </h4>
                <ul class="space-y-4">
                  @for (link of column.links; track link.label) {
                    <li>
                      <a 
                        [href]="link.href" 
                        class="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-base font-medium flex items-center gap-1 group"
                      >
                        {{ link.label }}
                        <lucide-icon [name]="ArrowUpRightIcon" class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1"></lucide-icon>
                      </a>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-12 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-text-secondary/40 text-sm font-medium">
            © {{ currentYear }} CloudNaaba. Tous droits réservés.
          </div>
          <div class="flex items-center gap-10">
            <a href="#" class="text-text-secondary/40 hover:text-text-primary transition-colors text-sm font-medium">
              Confidentialité
            </a>
            <a href="#" class="text-text-secondary/40 hover:text-text-primary transition-colors text-sm font-medium">
              Conditions
            </a>
            <button class="px-8 py-2.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 tracking-widest uppercase">
              Démarrer
            </button>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly TwitterIcon = Twitter;
  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly ArrowUpRightIcon = ArrowUpRight;

  currentYear = new Date().getFullYear();

  footerLinks = [
    {
      title: "Produit",
      links: [
        { label: "Accueil", href: "#" },
        { label: "Marketplace", href: "#" },
        { label: "Hybride", href: "#" },
        { label: "Tarifs", href: "#pricing" }
      ]
    },
    {
      title: "Plateforme",
      links: [
        { label: "Fonctionnement", href: "#how-it-works" },
        { label: "Sécurité", href: "#security" },
        { label: "Compatibilité", href: "#compatibility" },
        { label: "FAQ", href: "#faq-section" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "#" },
        { label: "Aide", href: "#" },
        { label: "Support", href: "#" }
      ]
    },
    {
      title: "Légal",
      links: [
        { label: "Conditions", href: "#" },
        { label: "Confidentialité", href: "#" },
        { label: "Mentions légales", href: "#" }
      ]
    }
  ];
}
