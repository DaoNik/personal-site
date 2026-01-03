import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectsApiService } from '@daonik-blog/client-features';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  private readonly projectsApiService = inject(ProjectsApiService);

  readonly projects$ = this.projectsApiService.getProjects();
}
