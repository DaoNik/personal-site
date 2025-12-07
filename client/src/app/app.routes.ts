import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { WorkComponent } from './pages/work.component';
import { JournalComponent } from './pages/journal.component';
import { NotesComponent } from './pages/notes.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'notes', component: NotesComponent },
  { path: '**', redirectTo: '' },
];
