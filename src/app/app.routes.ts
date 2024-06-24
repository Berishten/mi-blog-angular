import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

export const routes: Routes = [
  { path: '', component: PostListComponent, data: { animation: 'HomePage' } },
  { path: 'category/:id', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent, data: { animation: 'AboutPage' }, }
];
