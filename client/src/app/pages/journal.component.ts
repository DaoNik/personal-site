import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="journal-page">
      <div class="container">
        <div class="page-header">
          <h1>Журнал</h1>
          <p class="page-intro">
            Размышления о дизайне, коде и осознанной жизни.
          </p>
        </div>
        
        <div class="posts-list">
          <article class="post-card natural-card" *ngFor="let post of posts">
            <div class="post-meta">
              <span class="post-date">{{ post.date }}</span>
              <span class="post-tag">{{ post.category }}</span>
            </div>
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            <a href="#" class="read-more">Подробнее →</a>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .journal-page {
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
    }
    
    .posts-list {
      max-width: 42rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .post-card {
      padding: 2rem;
    }
    
    .post-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .post-date {
      font-size: 0.875rem;
      color: var(--color-text-light);
    }
    
    .post-tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      background: #f5f5f4;
      border-radius: 9999px;
      color: var(--color-accent);
    }
    
    .post-title {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
    
    .post-excerpt {
      color: var(--color-text-light);
      line-height: 1.7;
      margin-bottom: 1rem;
    }
    
    .read-more {
      font-size: 0.875rem;
      color: var(--color-green);
      font-weight: 500;
      transition: opacity 0.2s ease;
    }
    
    .read-more:hover {
      opacity: 0.8;
    }
  `]
})
export class JournalComponent {
  posts = [
    {
      id: 1,
      date: '15 марта 2024',
      category: 'Размышления',
      title: 'Искусство медленного кодирования',
      excerpt: 'В мире, одержимом скоростью, есть глубокая ценность в замедлении. Умея потратить время на написание вдумчивого, осознанного кода, приводит к лучшим результатам.'
    },
    {
      id: 2,
      date: '12 марта 2024',
      category: 'Дизайн',
      title: 'Проектирование для ясности',
      excerpt: 'Отличный дизайн устраняет препятствия. Когда интерфейсы исчезают на фоне, пользователи могут сосредоточиться на том, что действительно имеет значение.'
    },
    {
      id: 3,
      date: '08 марта 2024',
      category: 'Образ жизни',
      title: 'Минималистичная настройка рабочего пространства',
      excerpt: 'Ваша среда формирует вашу работу. Чистое, осознанное пространство способствует сосредоточенному, творческому мышлению.'
    },
    {
      id: 4,
      date: '01 марта 2024',
      category: 'Рост',
      title: 'Цифровое садоводство 101',
      excerpt: 'Обращение со своей базой знаний как с садом - лелеяние идей со временем, позволяя им расти органически.'
    }
  ];
}
