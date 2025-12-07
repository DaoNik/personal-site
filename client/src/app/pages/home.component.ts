import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { HeroSliderComponent, Slide } from '../components/hero-slider.component';
import { StatsCardComponent } from '../components/stats-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, HeroSliderComponent, StatsCardComponent],
  template: `
    <section class="home-page">
      <div class="container">
        <app-hero-slider [slides]="featuredSlides"></app-hero-slider>
        
        <div class="intro-section">
          <div class="intro-content">
            <div class="intro-avatar">
              <div class="avatar-placeholder">AS</div>
            </div>
            <div class="intro-text">
              <h1 class="intro-greeting">Привет, меня зовут Никита</h1>
              <p class="intro-bio">
                Веб-разработчик, создающий осознанные цифровые опыты, 
                которые почитают простоту, ясность и естественный мир.
              </p>
              <div class="intro-actions">
                <a routerLink="/work" class="btn-natural btn-primary btn-with-icon">
                  Смотреть работы
                  <lucide-angular [img]="ArrowRightIcon" [size]="16"></lucide-angular>
                </a>
                <a routerLink="/journal" class="btn-natural btn-secondary">Читать журнал</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="stats-section">
          <div class="stats-grid">
            <app-stats-card value="12+" label="Системы проектирования" icon="layers"></app-stats-card>
            <app-stats-card value="5 лет" label="Опыт" icon="coffee"></app-stats-card>
            <app-stats-card value="24" label="Цифровые продукты" icon="smartphone"></app-stats-card>
          </div>
        </div>
        
        <div class="journal-section">
          <div class="section-header">
            <h2>Последнее из журнала</h2>
            <a routerLink="/journal" class="view-all-link">Все записи →</a>
          </div>
          
          <div class="journal-grid">
            <div class="journal-card natural-card" *ngFor="let log of latestLogs">
              <div class="journal-meta">
                <span class="journal-date">{{ log.date }}</span>
                <span class="journal-tag">{{ log.tag }}</span>
              </div>
              <h3 class="journal-title">{{ log.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .home-page {
      padding: 2rem 0 4rem;
    }
    
    .intro-section {
      padding: 4rem 0;
    }
    
    .intro-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;
    }
    
    @media (min-width: 768px) {
      .intro-content {
        flex-direction: row;
        align-items: flex-start;
        text-align: left;
        gap: 3rem;
      }
    }
    
    .intro-avatar {
      flex-shrink: 0;
    }
    
    .avatar-placeholder {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      background: linear-gradient(135deg, #e7e5e4, #d6d3d1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-serif);
      font-size: 1.75rem;
      color: var(--color-accent);
    }
    
    .intro-greeting {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
      .intro-greeting {
        font-size: 3rem;
      }
    }
    
    .intro-bio {
      font-size: 1.125rem;
      color: var(--color-text-light);
      line-height: 1.7;
      max-width: 28rem;
      margin-bottom: 2rem;
    }
    
    .intro-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    @media (min-width: 768px) {
      .intro-actions {
        justify-content: flex-start;
      }
    }
    
    .btn-with-icon {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .stats-section {
      padding: 2rem 0 4rem;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    @media (min-width: 768px) {
      .stats-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .journal-section {
      padding: 2rem 0;
    }
    
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    
    .section-header h2 {
      font-size: 1.5rem;
    }
    
    .view-all-link {
      font-size: 0.875rem;
      color: var(--color-text-light);
      transition: color 0.2s ease;
    }
    
    .view-all-link:hover {
      color: var(--color-stone-800);
    }
    
    .journal-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    @media (min-width: 768px) {
      .journal-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .journal-card {
      padding: 1.5rem;
    }
    
    .journal-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.75rem;
    }
    
    .journal-date {
      font-size: 0.875rem;
      color: var(--color-text-light);
    }
    
    .journal-tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      background: #f5f5f4;
      border-radius: 9999px;
      color: var(--color-accent);
    }
    
    .journal-title {
      font-size: 1.125rem;
      color: var(--color-stone-800);
    }
  `]
})
export class HomeComponent {
  readonly ArrowRightIcon = ArrowRight;
  
  featuredSlides: Slide[] = [
    { 
      id: 1, 
      title: 'Органические системы', 
      description: 'Исследование пересечения естественных паттернов и дизайна интерфейсов.',
      image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1200&q=80',
      badge: 'Цифровая экология'
    },
    { 
      id: 2, 
      title: 'Осознанные технологии', 
      description: 'Создание приложений, которые уважают внимание пользователя и способствуют спокойствию.',
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80',
      badge: 'Цифровое благополучие'
    },
    { 
      id: 3, 
      title: 'Устойчивый веб', 
      description: 'Оптимизация производительности для снижения цифрового углеродного следа.',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
      badge: 'Низкоуглеродный код'
    }
  ];
  
  latestLogs = [
    { id: 101, date: '15 мар', title: 'Искусство медленного кодирования', tag: 'Размышления' },
    { id: 102, date: '12 мар', title: 'Проектирование для ясности', tag: 'Дизайн' },
    { id: 103, date: '08 мар', title: 'Минималистичная настройка рабочего пространства', tag: 'Образ жизни' },
    { id: 104, date: '01 мар', title: 'Цифровое садоводство 101', tag: 'Рост' }
  ];
}
