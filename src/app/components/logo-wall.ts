import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-wall',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="py-12 border-y border-white/5 bg-white/[0.01]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <p class="text-center text-text-secondary/40 text-xs font-bold uppercase tracking-[0.2em] mb-10">
          Compatible avec les standards du marché
        </p>
        <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
          @for (logo of logos; track logo.name) {
            <img
              [src]="logo.url"
              [alt]="logo.name"
              class="h-6 md:h-8 w-auto object-contain hover:scale-110 hover:opacity-100 transition-all duration-300 cursor-pointer"
              referrerpolicy="no-referrer"
            />
          }
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoWall {
  logos = [
    { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Google Cloud', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_Logo.svg' },
    { name: 'Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'DigitalOcean', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg' },
    { name: 'Hetzner', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Hetzner_Online_Logo.svg' },
    { name: 'OVHcloud', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/OVH_logo.svg' }
  ];
}
