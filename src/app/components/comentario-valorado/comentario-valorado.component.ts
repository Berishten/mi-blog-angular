import { Component } from '@angular/core';
import { ComentariosComponent } from '../comentarios/comentarios.component';
import { Comentario } from '../../models/comentario.model';

@Component({
  selector: 'app-comentario-valorado',
  standalone: true,
  imports: [],
  templateUrl: './comentario-valorado.component.html',
  styleUrl: './comentario-valorado.component.css',
})
export class ComentarioValoradoComponent extends ComentariosComponent {
  sinValoracion(comentario: Comentario): number {
    return 5 - comentario.valoracion;
  }

}
