import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Note {
  id: number;
  title: string;
  tags: string[];
  updated: string;
  preview: string;
}

export interface FullNote extends Note {
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotesApiService {
  private readonly fullNotes: FullNote[] = [];
  private readonly notes: Note[] = [
    {
      id: 1,
      tags: ['Дизайн'],
      title: 'Основы теории цвета',
      preview:
        'Понимание того, как цвета взаимодействуют и создают визуальную гармонию.',
      updated: '10 мар',
    },
    {
      id: 2,
      tags: ['Код'],
      title: 'Советы TypeScript',
      preview: 'Практические паттерны для написания чистого кода TypeScript.',
      updated: '8 мар',
    },
    {
      id: 3,
      tags: ['Инструменты'],
      title: 'Горячие клавиши Figma',
      preview: 'Важные сочетания клавиш для эффективной работы с дизайном.',
      updated: '5 мар',
    },
    {
      id: 4,
      tags: ['Процессы'],
      title: 'Контрольный список проверки дизайна',
      preview: 'Ключевые вопросы для задания во время критики дизайна.',
      updated: '3 мар',
    },
    {
      id: 5,
      tags: ['Дизайн'],
      title: 'Типографическая шкала',
      preview: 'Создание гармоничных иерархий типов с модульными масштабами.',
      updated: '28 фев',
    },
    {
      id: 6,
      tags: ['Код'],
      title: 'Паттерны CSS Grid',
      preview: 'Общие паттерны макета с использованием CSS Grid.',
      updated: '25 фев',
    },
  ];

  getTags(): Observable<string[]> {
    const tags = new Set<string>();

    this.notes
      .map((note) => note.tags)
      .flat()
      .forEach((tag) => tags.add(tag));

    return of(Array.from(tags));
  }

  getNotes(tag?: string): Observable<Note[]> {
    if (!tag) return of(this.notes);

    return of(this.notes.filter((note) => note.tags.includes(tag)));
  }

  getNoteById(id: number): Observable<FullNote | undefined> {
    return of(this.fullNotes.find((note) => note.id === id));
  }
}
