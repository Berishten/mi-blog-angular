import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ComentariosComponent } from "../comentarios/comentarios.component";
import { Comentario } from '../../models/comentario.model';
import { ComentarioValoradoComponent } from "../comentario-valorado/comentario-valorado.component";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
  imports: [RouterModule, CommonModule, ComentariosComponent, ComentarioValoradoComponent]
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  private destroy$ = new Subject<void>();
  comentariosMock: Comentario[] = [
    { id: 0, postId: 0, valoracion: 1, texto: 'El post fue una kk', autor: 'Beridevs', fecha: '16/02/2022' },
    { id: 1, postId: 0, valoracion: 5, texto: 'Mu weno, na que decir hmane!', autor: 'Pablo', fecha: '02/03/2024' },
    { id: 2, postId: 0, valoracion: 3, texto: '... deja el zelda', autor: 'ElPerverto2', fecha: '02/03/2024' },
    { id: 3, postId: 0, valoracion: 4, texto: 'Un manjarsh...', autor: 'Chichero21', fecha: '30/12/2024' },
  ];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getPostById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(post => this.post = post);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public get comentarios(): Comentario[] {
    // return this.post.comentarios;
    return this.comentariosMock;
  }

  calculateAverageRating(): number {
    let total = 0;
    for (let i = 0; i < this.comentarios.length; i++) {
      total += this.comentarios[i].valoracion;
    }
    return total / this.comentarios.length;
  }
}
