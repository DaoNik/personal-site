import { TestBed } from '@angular/core/testing';
import { Post } from './post';

describe('Post', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Post],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Post);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should match snapshot', () => {
    const fixture = TestBed.createComponent(Post);
    fixture.detectChanges();
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
