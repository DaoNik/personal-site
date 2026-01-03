import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { PostApiService } from './post-api.service';

describe('PostApiService', () => {
  let service: PostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return all posts', async () => {
    const posts = await firstValueFrom(service.getPosts());
    expect(posts.length).toBeGreaterThan(0);
  });

  it('should return post by id', async () => {
    const post = await firstValueFrom(service.getPostById(1));
    expect(post?.id).toBe(1);
  });
});
