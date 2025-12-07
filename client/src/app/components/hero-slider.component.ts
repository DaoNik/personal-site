import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';

export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="hero-slider">
      <div class="embla" #emblaRef>
        <div class="embla__container">
          <div class="embla__slide" *ngFor="let slide of slides">
            <div class="slide-image" [style.backgroundImage]="'url(' + slide.image + ')'"></div>
            <div class="slide-overlay"></div>
            <div class="slide-content">
              <div class="container">
                <span class="slide-badge">{{ slide.badge || 'Featured' }}</span>
                <h2 class="slide-title">{{ slide.title }}</h2>
                <p class="slide-desc">{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="slider-controls">
        <button class="control-btn" (click)="scrollPrev()">
          <lucide-angular [img]="ChevronLeftIcon" [size]="20"></lucide-angular>
        </button>
        <button class="control-btn" (click)="scrollNext()">
          <lucide-angular [img]="ChevronRightIcon" [size]="20"></lucide-angular>
        </button>
      </div>
      
      <div class="slider-dots">
        <button 
          *ngFor="let slide of slides; let i = index" 
          class="dot" 
          [class.active]="selectedIndex === i"
          (click)="scrollTo(i)">
        </button>
      </div>
    </div>
  `,
  styles: [`
    .hero-slider {
      position: relative;
      margin-bottom: 3rem;
    }
    
    .embla {
      overflow: hidden;
      border-radius: 1.5rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    }
    
    .embla__container {
      display: flex;
    }
    
    .embla__slide {
      flex: 0 0 100%;
      min-width: 0;
      position: relative;
      aspect-ratio: 21/9;
    }
    
    @media (max-width: 768px) {
      .embla__slide {
        aspect-ratio: 16/9;
      }
    }
    
    .slide-image {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.7s ease;
    }
    
    .embla__slide:hover .slide-image {
      transform: scale(1.05);
    }
    
    .slide-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent);
    }
    
    .slide-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem;
    }
    
    @media (min-width: 768px) {
      .slide-content {
        padding: 4rem;
      }
    }
    
    .slide-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(8px);
      border-radius: 9999px;
      font-size: 0.75rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1rem;
    }
    
    .slide-title {
      font-size: 2.5rem;
      color: white !important;
      margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
      .slide-title {
        font-size: 3.5rem;
      }
    }
    
    .slide-desc {
      font-size: 1.125rem;
      color: rgba(255,255,255,0.9);
      max-width: 32rem;
      font-weight: 300;
      line-height: 1.6;
    }
    
    .slider-controls {
      position: absolute;
      bottom: 3rem;
      right: 3rem;
      display: none;
      gap: 0.75rem;
    }
    
    @media (min-width: 768px) {
      .slider-controls {
        display: flex;
      }
    }
    
    .control-btn {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(8px);
      border: none;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    
    .control-btn:hover {
      background: white;
      color: var(--color-stone-800);
    }
    
    .slider-dots {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.5rem;
    }
    
    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--color-border);
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .dot.active {
      background: var(--color-stone-800);
      width: 1.5rem;
      border-radius: 9999px;
    }
  `]
})
export class HeroSliderComponent implements AfterViewInit, OnDestroy {
  @Input() slides: Slide[] = [];
  @ViewChild('emblaRef') emblaRef!: ElementRef<HTMLElement>;
  
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  
  private embla: EmblaCarouselType | null = null;
  selectedIndex = 0;
  
  ngAfterViewInit() {
    if (this.emblaRef?.nativeElement) {
      this.embla = EmblaCarousel(this.emblaRef.nativeElement, {
        loop: true,
        align: 'start'
      });
      
      this.embla.on('select', () => {
        this.selectedIndex = this.embla?.selectedScrollSnap() ?? 0;
      });
    }
  }
  
  ngOnDestroy() {
    this.embla?.destroy();
  }
  
  scrollPrev() {
    this.embla?.scrollPrev();
  }
  
  scrollNext() {
    this.embla?.scrollNext();
  }
  
  scrollTo(index: number) {
    this.embla?.scrollTo(index);
  }
}
