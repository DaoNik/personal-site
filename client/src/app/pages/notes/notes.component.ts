import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Note, NotesApiService } from '@daonik-blog/client-features';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  private readonly notesApiService = inject(NotesApiService);
  private readonly destroyRef = inject(DestroyRef);

  categories = ['Все'];
  activeCategory = 'Все';
  notes: Note[] = [];

  ngOnInit(): void {
    this.notesApiService
      .getTags()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((tags) => {
        this.categories.push(...tags);
      });
    this.getNotes();
  }

  onCategoryClick(category: string) {
    this.activeCategory = category;
    this.getNotes();
  }

  private getNotes() {
    const category =
      this.activeCategory === 'Все' ? undefined : this.activeCategory;

    this.notesApiService
      .getNotes(category)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((notes) => {
        this.notes = notes;
      });
  }
}
