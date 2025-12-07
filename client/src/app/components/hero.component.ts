import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero" [style.backgroundImage]="'url(' + image + ')'">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <span class="hero-badge">{{ badge }}</span>
          <h2 class="hero-title">{{ title }}</h2>
          <p class="hero-desc">{{ description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero {
      position: relative;
      border-radius: 1.5rem;
      overflow: hidden;
      aspect-ratio: 21/9;
      background-size: cover;
      background-position: center;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
      margin-bottom: 3rem;
    }
    
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent);
    }
    
    .hero-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem;
    }
    
    @media (min-width: 768px) {
      .hero-content {
        padding: 4rem;
      }
    }
    
    .hero-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(8px);
      border-radius: 9999px;
      font-size: 0.75rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1rem;
    }
    
    .hero-title {
      font-size: 2.5rem;
      color: white !important;
      margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
      .hero-title {
        font-size: 3.5rem;
      }
    }
    
    .hero-desc {
      font-size: 1.125rem;
      color: rgba(255,255,255,0.9);
      max-width: 32rem;
      font-weight: 300;
      line-height: 1.6;
    }
  `]
})
export class HeroComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() badge = 'Featured';
}
