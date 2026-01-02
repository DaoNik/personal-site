import { TestBed } from '@angular/core/testing';
import { HeroSliderComponent } from './hero-slider.component';
import { vi } from 'vitest';

vi.mock('embla-carousel', () => {
  const mockApi = {
    on: vi.fn(),
    destroy: vi.fn(),
    scrollPrev: vi.fn(),
    scrollNext: vi.fn(),
    scrollTo: vi.fn(),
    selectedScrollSnap: vi.fn().mockReturnValue(0),
  };

  return {
    __esModule: true,
    default: vi.fn(() => mockApi),
  };
});

describe('HeroSliderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSliderComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroSliderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should match snapshot', () => {
    const fixture = TestBed.createComponent(HeroSliderComponent);
    fixture.componentInstance.slides = [
      {
        id: 1,
        title: 'Test slide',
        description: 'Desc',
        image: 'https://example.com/image.jpg',
      },
    ];
    fixture.detectChanges();
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
