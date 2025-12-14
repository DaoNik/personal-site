import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-post',
  imports: [],
  template: `<p>post works!</p>`,
  styleUrl: './post.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Post {}
