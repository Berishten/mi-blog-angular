import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => this.posts = posts);
  }

  showPostDetail(post: Post): void {
    this.router.navigate(['/post', post.id]);
  }
}
