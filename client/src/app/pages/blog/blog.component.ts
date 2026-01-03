import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostApiService } from '@daonik-blog/client-features';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  private readonly postApiService = inject(PostApiService);

  readonly posts$ = this.postApiService.getPosts();
}
