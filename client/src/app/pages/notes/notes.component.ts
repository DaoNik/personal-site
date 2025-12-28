import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  categories = ['Все', 'Дизайн', 'Код', 'Инструменты', 'Процесс'];
  activeCategory = 'Все';

  notes = [
    {
      id: 1,
      category: 'Дизайн',
      title: 'Основы теории цвета',
      preview:
        'Понимание того, как цвета взаимодействуют и создают визуальную гармонию.',
      updated: '10 мар',
    },
    {
      id: 2,
      category: 'Код',
      title: 'Советы TypeScript',
      preview: 'Практические паттерны для написания чистого кода TypeScript.',
      updated: '8 мар',
    },
    {
      id: 3,
      category: 'Инструменты',
      title: 'Горячие клавиши Figma',
      preview: 'Важные сочетания клавиш для эффективной работы с дизайном.',
      updated: '5 мар',
    },
    {
      id: 4,
      category: 'Процесс',
      title: 'Контрольный список проверки дизайна',
      preview: 'Ключевые вопросы для задания во время критики дизайна.',
      updated: '3 мар',
    },
    {
      id: 5,
      category: 'Дизайн',
      title: 'Типографическая шкала',
      preview: 'Создание гармоничных иерархий типов с модульными масштабами.',
      updated: '28 фев',
    },
    {
      id: 6,
      category: 'Код',
      title: 'Паттерны CSS Grid',
      preview: 'Общие паттерны макета с использованием CSS Grid.',
      updated: '25 фев',
    },
  ];

  get filteredNotes() {
    if (this.activeCategory === 'Все') return this.notes;
    return this.notes.filter((n) => n.category === this.activeCategory);
  }
}
