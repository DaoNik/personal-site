import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  PostApiService,
  ProjectsApiService,
} from '@daonik-blog/client-features';
import { StatsCardComponent } from '@daonik-blog/client-shared';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { map } from 'rxjs/operators';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LucideAngularModule,
    HeroSliderComponent,
    StatsCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly postApiService = inject(PostApiService);
  private readonly projectsApiService = inject(ProjectsApiService);
  readonly ArrowRightIcon = ArrowRight;

  readonly latestPosts$ = this.postApiService
    .getPosts()
    .pipe(map((posts) => posts.slice(0, 3)));

  readonly projects$ = this.projectsApiService.getProjects();
}
