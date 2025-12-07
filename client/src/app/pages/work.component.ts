import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="work-page">
      <div class="container">
        <div class="page-header">
          <h1>Выбранные работы</h1>
          <p class="page-intro">
            Тщательно подобранная коллекция проектов, исследующих пересечение 
            дизайна, технологии и осознанной жизни.
          </p>
        </div>
        
        <div class="projects-grid">
          <div class="project-card natural-card" *ngFor="let project of projects">
            <div class="project-image" [style.backgroundImage]="'url(' + project.image + ')'"></div>
            <div class="project-content">
              <span class="project-category">{{ project.category }}</span>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .work-page {
      padding: 2rem 0 4rem;
    }
    
    .page-header {
      text-align: center;
      max-width: 32rem;
      margin: 0 auto 4rem;
    }
    
    .page-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .page-intro {
      color: var(--color-text-light);
      font-size: 1.125rem;
      line-height: 1.7;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    @media (min-width: 768px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .project-card {
      overflow: hidden;
    }
    
    .project-image {
      aspect-ratio: 16/10;
      background-size: cover;
      background-position: center;
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-category {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-green);
      font-weight: 500;
    }
    
    .project-title {
      font-size: 1.25rem;
      margin: 0.5rem 0;
    }
    
    .project-desc {
      font-size: 0.95rem;
      color: var(--color-text-light);
      line-height: 1.6;
    }
  `]
})
export class WorkComponent {
  projects = [
    {
      id: 1,
      title: 'Органические системы',
      category: 'Цифровая экология',
      description: 'Исследование пересечения естественных паттернов и дизайна интерфейсов.',
      image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Осознанные технологии',
      category: 'Цифровое благополучие',
      description: 'Создание приложений, которые уважают внимание пользователя и способствуют спокойствию.',
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Устойчивый веб',
      category: 'Низкоуглеродный код',
      description: 'Оптимизация производительности для снижения цифрового углеродного следа.',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Тихие интерфейсы',
      category: 'UX дизайн',
      description: 'Проектирование опытов, которые шепчут, а не кричат.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
    }
  ];
}
