import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://mi-api.cl';

  constructor(private http: HttpClient) { }
  private posts = [
    { id: 1, title: 'Post 1', content: 'Contenido de angular', category: 'Angular' },
    { id: 2, title: 'Post 2', content: 'Contenido de typescript', category: 'TypeScript' },
    { id: 3, title: 'Post 3', content: 'Contenido de javascript', category: 'JavaScript' }
  ]

  getPosts(): Observable<Post[]> {
    // return this.http.get<Post[]>(`${this.apiUrl}/posts`);
    return of(this.posts);
  }

  getPostById(id: number): Observable<Post | undefined> {
    return of(
      this.posts.find(p => p.id === id)
    );
  }
}

