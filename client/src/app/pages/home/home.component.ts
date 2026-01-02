import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import {
  HeroSliderComponent,
  Slide,
} from '../../components/hero-slider/hero-slider.component';
import { StatsCardComponent } from '@daonik-blog/client-shared';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LucideAngularModule,
    HeroSliderComponent,
    StatsCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly ArrowRightIcon = ArrowRight;

  featuredSlides: Slide[] = [
    {
      id: 1,
      title: 'Органические системы',
      description:
        'Исследование пересечения естественных паттернов и дизайна интерфейсов.',
      image:
        'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1200&q=80',
      badge: 'Цифровая экология',
    },
    {
      id: 2,
      title: 'Осознанные технологии',
      description:
        'Создание приложений, которые уважают внимание пользователя и способствуют спокойствию.',
      image:
        'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80',
      badge: 'Цифровое благополучие',
    },
    {
      id: 3,
      title: 'Устойчивый веб',
      description:
        'Оптимизация производительности для снижения цифрового углеродного следа.',
      image:
        'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
      badge: 'Низкоуглеродный код',
    },
  ];

  latestLogs = [
    {
      id: 101,
      date: '15 мар',
      title: 'Искусство медленного кодирования',
      tag: 'Размышления',
    },
    {
      id: 102,
      date: '12 мар',
      title: 'Проектирование для ясности',
      tag: 'Дизайн',
    },
    {
      id: 103,
      date: '08 мар',
      title: 'Минималистичная настройка рабочего пространства',
      tag: 'Образ жизни',
    },
    { id: 104, date: '01 мар', title: 'Цифровое садоводство 101', tag: 'Рост' },
  ];
}
