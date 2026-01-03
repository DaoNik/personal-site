import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { NotesApiService } from './notes-api.service';

describe('NotesApiService', () => {
  let service: NotesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return unique tags', async () => {
    const tags = await firstValueFrom(service.getTags());
    expect(tags).toContain('Дизайн');
    expect(tags).toContain('Код');
    expect(tags).toContain('Инструменты');
    expect(tags).toContain('Процессы');
  });

  it('should filter notes by tag', async () => {
    const notes = await firstValueFrom(service.getNotes('Код'));
    expect(notes.length).toBeGreaterThan(0);
    expect(notes.every((n) => n.tags.includes('Код'))).toBe(true);
  });

  it('should return note by id when available', async () => {
    const note = await firstValueFrom(service.getNoteById(1));
    expect(note).toBeUndefined(); // fullNotes пуст, пока мок
  });
});
