import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NotesComponent } from './pages/notes/notes.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'notes', component: NotesComponent },
  // { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
