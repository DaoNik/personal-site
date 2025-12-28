import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Coffee,
  Layers,
  Smartphone,
  LucideIconData,
} from 'lucide-angular';

@Component({
  selector: 'lib-stats-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      smartphone: this.Smartphone,
    };
    return icons[this.icon] || this.Layers;
  }
}
