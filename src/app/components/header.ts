import { ChangeDetectionStrategy, Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, spring } from 'motion';
import { LucideAngularModule, Menu, X, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header
      [class.glass-header]="isScrolled()"
      [class.bg-transparent]="!isScrolled()"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-[76px] flex items-center"
    >
      <div class="container mx-auto max-w-[1240px] px-6 flex items-center justify-between">
        <!-- Logo Block -->
        <div class="flex items-center gap-3 shrink-0">
          <div class="relative w-11 h-11 bg-accent-primary rounded-full flex items-center justify-center border-2 border-accent-primary/20 overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            <img 
              src="https://cdn.phototourl.com/free/2026-03-25-7e6959d3-1a44-44f9-a676-6e8e2acf2388.png" 
              alt="CloudNaaba" 
              class="w-full h-full object-contain p-1 relative z-10"
              referrerpolicy="no-referrer"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-accent-primary to-black/40 opacity-40"></div>
          </div>
          <span class="text-xl font-black tracking-tighter font-display text-text-primary">
            Cloud<span class="text-accent-primary">Naaba</span>
          </span>
        </div>

        <!-- Navigation Center -->
        <nav class="hidden lg:flex items-center gap-8">
          @for (link of navLinks; track link.name) {
            <div class="flex items-center gap-2 group relative">
              <a 
                [href]="link.href" 
                class="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                {{ link.name }}
              </a>
              @if (link.badge) {
                <span class="px-1.5 py-0.5 rounded-full bg-accent-primary/12 border border-accent-primary/20 text-accent-primary text-[10px] font-bold">
                  {{ link.badge }}
                </span>
              }
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-200 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </div>
          }
        </nav>

        <!-- Actions Right -->
        <div class="flex items-center gap-6">
          <button class="hidden sm:block text-[15px] font-medium text-text-secondary hover:text-text-primary transition-all relative group">
            Se connecter
            <span class="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
          </button>
          <button class="bg-accent-primary hover:bg-accent-primary/80 text-white px-5 py-2.5 rounded-[10px] text-[15px] font-bold transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            Commencer
          </button>
          
          <!-- Burger Menu -->
          <button 
            (click)="toggleMobileMenu()"
            class="lg:hidden text-text-primary p-1"
          >
            <lucide-icon [name]="mobileMenuOpen() ? XIcon : MenuIcon"></lucide-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      @if (mobileMenuOpen()) {
        <div
          id="mobile-menu"
          class="fixed inset-0 top-[76px] bg-bg-primary z-40 lg:hidden p-6 flex flex-col gap-6"
        >
          @for (link of navLinks; track link.name) {
            <a 
              [href]="link.href"
              class="text-2xl font-bold flex items-center justify-between border-b border-border-subtle pb-4"
              (click)="toggleMobileMenu()"
            >
              <span class="flex items-center gap-3">
                {{ link.name }}
                @if (link.badge) {
                  <span class="text-xs bg-accent-primary/20 text-accent-primary px-2 py-0.5 rounded-full">
                    {{ link.badge }}
                  </span>
                }
              </span>
              <lucide-icon [name]="ChevronRightIcon" class="text-accent-primary"></lucide-icon>
            </a>
          }
          <div class="mt-auto flex flex-col gap-4">
            <button class="w-full py-4 rounded-xl border border-border-subtle font-bold">
              Se connecter
            </button>
            <button class="w-full py-4 rounded-xl bg-accent-primary font-bold">
              Commencer maintenant
            </button>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    .glass-header {
      background: rgba(5, 5, 5, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly ChevronRightIcon = ChevronRight;

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Hybride', href: '#', badge: 'NEW' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Sécurité', href: '#security' },
    { name: 'Contact', href: '#' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    const nextState = !this.mobileMenuOpen();
    this.mobileMenuOpen.set(nextState);
    
    if (nextState) {
      setTimeout(() => {
        animate('#mobile-menu', 
          { x: ['100%', '0%'], opacity: [0, 1] },
          { easing: spring({ damping: 25, stiffness: 200 }) }
        );
      }, 0);
    }
  }
}
