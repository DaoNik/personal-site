import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Layers, Coffee, Smartphone, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="stats-card natural-card">
      <div class="icon-wrapper">
        <lucide-angular [img]="getIcon()" [size]="24" [strokeWidth]="2"></lucide-angular>
      </div>
      <div class="stats-content">
        <div class="stats-value">{{ value }}</div>
        <div class="stats-label">{{ label }}</div>
      </div>
    </div>
  `,
  styles: [`
    .stats-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      height: 100%;
    }
    
    .icon-wrapper {
      width: 3rem;
      height: 3rem;
      border-radius: 1rem;
      background: #f5f5f4;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-accent);
    }
    
    .stats-value {
      font-family: var(--font-serif);
      font-size: 1.875rem;
      color: var(--color-stone-800);
      margin-bottom: 0.25rem;
    }
    
    .stats-label {
      font-size: 0.875rem;
      color: var(--color-text-light);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  `]
})
export class StatsCardComponent {
  @Input() value = '';
  @Input() label = '';
  @Input() icon: 'layers' | 'coffee' | 'smartphone' = 'layers';
  
  readonly Layers = Layers;
  readonly Coffee = Coffee;
  readonly Smartphone = Smartphone;
  
  getIcon(): LucideIconData {
    const icons: Record<string, LucideIconData> = {
      layers: this.Layers,
      coffee: this.Coffee,
      smartphone: this.Smartphone
    };
    return icons[this.icon] || this.Layers;
  }
}
