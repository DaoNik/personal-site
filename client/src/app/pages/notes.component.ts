import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="notes-page">
      <div class="container">
        <div class="page-header">
          <h1>База знаний</h1>
          <p class="page-intro">
            Цифровой сад идей, ресурсов и знаний.
          </p>
        </div>
        
        <div class="categories">
          <button 
            class="category-btn" 
            *ngFor="let cat of categories"
            [class.active]="activeCategory === cat"
            (click)="activeCategory = cat">
            {{ cat }}
          </button>
        </div>
        
        <div class="notes-grid">
          <div class="note-card natural-card" *ngFor="let note of filteredNotes">
            <span class="note-category">{{ note.category }}</span>
            <h3 class="note-title">{{ note.title }}</h3>
            <p class="note-preview">{{ note.preview }}</p>
            <div class="note-footer">
              <span class="note-date">Обновлено {{ note.updated }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .notes-page {
      padding: 2rem 0 4rem;
    }
    
    .page-header {
      text-align: center;
      max-width: 32rem;
      margin: 0 auto 3rem;
    }
    
    .page-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .page-intro {
      color: var(--color-text-light);
      font-size: 1.125rem;
    }
    
    .categories {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 3rem;
    }
    
    .category-btn {
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      border: 1px solid var(--color-border);
      background: white;
      font-size: 0.875rem;
      color: var(--color-text-light);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .category-btn:hover {
      border-color: var(--color-accent);
      color: var(--color-stone-800);
    }
    
    .category-btn.active {
      background: var(--color-stone-800);
      border-color: var(--color-stone-800);
      color: white;
    }
    
    .notes-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    @media (min-width: 768px) {
      .notes-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .notes-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .note-card {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
    }
    
    .note-category {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-green);
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    
    .note-title {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
    
    .note-preview {
      font-size: 0.875rem;
      color: var(--color-text-light);
      line-height: 1.6;
      flex: 1;
    }
    
    .note-footer {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--color-border);
    }
    
    .note-date {
      font-size: 0.75rem;
      color: var(--color-text-light);
    }
  `]
})
export class NotesComponent {
  categories = ['Все', 'Дизайн', 'Код', 'Инструменты', 'Процесс'];
  activeCategory = 'Все';
  
  notes = [
    { id: 1, category: 'Дизайн', title: 'Основы теории цвета', preview: 'Понимание того, как цвета взаимодействуют и создают визуальную гармонию.', updated: '10 мар' },
    { id: 2, category: 'Код', title: 'Советы TypeScript', preview: 'Практические паттерны для написания чистого кода TypeScript.', updated: '8 мар' },
    { id: 3, category: 'Инструменты', title: 'Горячие клавиши Figma', preview: 'Важные сочетания клавиш для эффективной работы с дизайном.', updated: '5 мар' },
    { id: 4, category: 'Процесс', title: 'Контрольный список проверки дизайна', preview: 'Ключевые вопросы для задания во время критики дизайна.', updated: '3 мар' },
    { id: 5, category: 'Дизайн', title: 'Типографическая шкала', preview: 'Создание гармоничных иерархий типов с модульными масштабами.', updated: '28 фев' },
    { id: 6, category: 'Код', title: 'Паттерны CSS Grid', preview: 'Общие паттерны макета с использованием CSS Grid.', updated: '25 фев' }
  ];
  
  get filteredNotes() {
    if (this.activeCategory === 'Все') return this.notes;
    return this.notes.filter(n => n.category === this.activeCategory);
  }
}
