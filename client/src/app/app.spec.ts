import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';

describe('App', () => {
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();

    component = TestBed.createComponent(App).componentInstance;
  });

  it('should be create App', () => {
    expect(component).toBeTruthy();
  });
});
