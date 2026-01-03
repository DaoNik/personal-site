import { TestBed } from '@angular/core/testing';
import { NotesComponent } from './notes.component';

describe('NotesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NotesComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
