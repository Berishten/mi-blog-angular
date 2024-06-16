import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comentario } from '../../models/comentario.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValoracionComponent } from '../valoracion/valoracion.component';

@Component({
  selector: 'app-agregar-comentario',
  standalone: true,
  imports: [ReactiveFormsModule, ValoracionComponent],
  templateUrl: './agregar-comentario.component.html',
  styleUrl: './agregar-comentario.component.css'
})
export class AgregarComentarioComponent {
  @Input() idPost!: number;
  @Output() comentarioCreado = new EventEmitter<Comentario>();

  comentarioForm: FormGroup = new FormGroup({
    texto: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    autor: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    valoracion: new FormControl('', Validators.required)
  });


  public set valoracion(v: number) {
    this.comentarioForm.get("valoracion")?.setValue(v);
  }

  onSubmit() {
    const comentarioValues = this.comentarioForm.value;
    const comentarioNuevo: Comentario = {
      id: 0,
      texto: comentarioValues.texto,
      autor: comentarioValues.autor,
      fecha: '12/12/2012',
      valoracion: Math.floor(Math.random() * 5) + 1
    };

    this.comentarioForm.reset();
    this.comentarioCreado.emit(comentarioNuevo);
  }
}
