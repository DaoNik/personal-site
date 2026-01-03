import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ProjectDTO {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private readonly mockProjects: ProjectDTO[] = [
    {
      id: 1,
      title: 'Органические системы',
      description:
        'Исследование пересечения естественных паттернов и дизайна интерфейсов.',
      image:
        'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1200&q=80',
      category: 'Цифровая экология',
    },
    {
      id: 2,
      title: 'Осознанные технологии',
      description:
        'Создание приложений, которые уважают внимание пользователя и способствуют спокойствию.',
      image:
        'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80',
      category: 'Цифровое благополучие',
    },
    {
      id: 3,
      title: 'Устойчивый веб',
      description:
        'Оптимизация производительности для снижения цифрового углеродного следа.',
      image:
        'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
      category: 'Низкоуглеродный код',
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

  getProjects(): Observable<ProjectDTO[]> {
    return of(this.mockProjects);
  }
}
