import { Component } from '@angular/core';
import { ComentariosComponent } from '../comentarios/comentarios.component';
import { Comentario } from '../../models/comentario.model';
import { AgregarComentarioComponent } from "../agregar-comentario/agregar-comentario.component";

@Component({
  selector: 'app-comentario-valorado',
  standalone: true,
  templateUrl: './comentario-valorado.component.html',
  styleUrl: './comentario-valorado.component.css',
  imports: [AgregarComentarioComponent]
})
export class ComentarioValoradoComponent extends ComentariosComponent {
  public get idPost() : number {
    return 0;
  }

  sinValoracion(comentario: Comentario): number {
    return 5 - comentario.valoracion;
  }

  comentarioCreado(comentarioNuevo: Comentario) {
    comentarioNuevo.id = this.comentarios.length + 1;
    this.comentarios.push(comentarioNuevo);
  }
}
