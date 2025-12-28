import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
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
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
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
        align: 'start',
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
