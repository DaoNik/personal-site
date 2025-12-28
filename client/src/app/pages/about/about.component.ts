import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  values = [
    {
      title: 'Осознанный темп',
      description:
        'Проекты без спешки: прозрачные фазы, контрольные точки и дыхание между ними.',
    },
    {
      title: 'Ясность интерфейсов',
      description:
        'Чёткая иерархия, экономия когнитивных усилий, щадящее уведомление пользователя.',
    },
    {
      title: 'Экология кода',
      description:
        'Дизайн-системы, переиспользуемые блоки и бережное отношение к производительности.',
    },
  ];

  timeline = [
    {
      period: '2024 — сейчас',
      role: 'Product дизайнер / Frontend',
      place: 'Фриланс / студии',
      focus: 'Дизайн-системы, интерфейсы и сборка фронтенда на Angular.',
    },
    {
      period: '2021 — 2024',
      role: 'UX/UI дизайнер',
      place: 'Продуктовые компании',
      focus: 'Исследования, CJM, прототипы, запуск мобильных и web-фич.',
    },
    {
      period: '2019 — 2021',
      role: 'Frontend разработчик',
      place: 'Аутсорс',
      focus: 'SPA на Angular/React, оптимизация производительности и DX.',
    },
  ];

  tools = [
    {
      title: 'Дизайн и системы',
      items: ['Figma', 'Design tokens', 'Component libraries', 'CJM/Flow'],
    },
    {
      title: 'Frontend стек',
      items: ['Angular', 'NestJS', 'TypeScript', 'Vite', 'Nx'],
    },
    {
      title: 'Практики',
      items: ['Discovery → Delivery', 'Accessible by default', 'Perf budgets'],
    },
  ];
}
