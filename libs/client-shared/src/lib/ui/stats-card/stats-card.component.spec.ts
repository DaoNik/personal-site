import { TestBed } from '@angular/core/testing';
import { StatsCardComponent } from './stats-card.component';

describe('StatsCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsCardComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(StatsCardComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should match snapshot', () => {
    const fixture = TestBed.createComponent(StatsCardComponent);
    fixture.componentInstance.value = '10';
    fixture.componentInstance.label = 'Label';
    fixture.detectChanges();
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
