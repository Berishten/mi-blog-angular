import { Component, Input } from '@angular/core';
import { Comentario } from '../../models/comentario.model';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  @Input() comentarios: Comentario[] = [];
}
