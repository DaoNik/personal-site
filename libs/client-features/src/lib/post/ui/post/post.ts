import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="post-card">
      <header>
        <p class="eyebrow">Заметка</p>
        <h2>Новый пост</h2>
        <p class="lede">
          Короткое описание поста. Замените содержимое на реальные данные или
          передайте через &#64;Input.
        </p>
      </header>
    </article>
  `,
  styleUrl: './post.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Post {}
