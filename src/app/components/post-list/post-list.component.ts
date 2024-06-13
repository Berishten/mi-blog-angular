import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const id = Number(params['id']);
        if (id  && id != 0) {
          this.blogService.getPostsByCategory(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(posts => this.posts = posts);
        } else {
          this.blogService.getPosts()
            .pipe(takeUntil(this.destroy$))
            .subscribe(posts => this.posts = posts);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
