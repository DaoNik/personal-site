import { TestBed } from '@angular/core/testing';
import { WorkComponent } from './work.component';

describe('WorkComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WorkComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should match snapshot', () => {
    const fixture = TestBed.createComponent(WorkComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
