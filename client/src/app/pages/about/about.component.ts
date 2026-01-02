import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
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
        'Чёткая структура, экономия когнитивных усилий, щадящее уведомление пользователя.',
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
      role: 'Frontend разработчик',
      place: 'Удаленная работа/Банковский сектор',
      focus:
        'Дизайн-системы, интерфейсы, налаживание бизнес-процессов внутри команды и создание фронтенда на Angular/чистом JavaScript.',
    },
    {
      period: '2022 — 2024',
      role: 'Fullstack разработчик - Angular/Golang',
      place: 'Удаленная работа/Маркетплейс/Складская логистика',
      focus:
        'Переработка легаси проекта складской логистики на современные технологии, в соответствии с требованиями бизнеса, безопасности, стабильности и производительности.',
    },
    {
      period: '2021 — 2022',
      role: 'Студент Я.Практикум',
      place: 'Удаленное обучение параллельно со службой в армии',
      focus:
        'SPA на чистом js/React, изучение вёрстки, написание кода на js, базовое изучение Node.js/Express',
    },
  ];

  tools = [
    {
      title: 'Дизайн-системы',
      items: ['Figma', 'Custom component libraries', 'User Flow'],
    },
    {
      title: 'Frontend стек',
      items: ['Angular', 'Pug', 'TypeScript', 'Vite', 'Nx', 'Storybook'],
    },
    {
      title: 'Backend стек',
      items: ['Node.js', 'Express', 'Nest.js', 'MongoDB'],
    },
    {
      title: 'Практики',
      items: [
        'Desktop First',
        'Module Architecture',
        'Onion Architecture',
        'Lighthouse budgets',
      ],
    },
  ];
}
