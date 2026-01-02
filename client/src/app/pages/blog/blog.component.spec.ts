import { TestBed } from '@angular/core/testing';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should match snapshot', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
