import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  projects = [
    {
      id: 1,
      title: 'Органические системы',
      category: 'Цифровая экология',
      description:
        'Исследование пересечения естественных паттернов и дизайна интерфейсов.',
      image:
        'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Осознанные технологии',
      category: 'Цифровое благополучие',
      description:
        'Создание приложений, которые уважают внимание пользователя и способствуют спокойствию.',
      image:
        'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Устойчивый веб',
      category: 'Низкоуглеродный код',
      description:
        'Оптимизация производительности для снижения цифрового углеродного следа.',
      image:
        'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Тихие интерфейсы',
      category: 'UX дизайн',
      description: 'Проектирование опытов, которые шепчут, а не кричат.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    },
  ];
}
