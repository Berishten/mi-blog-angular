import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { AgregarComentarioComponent } from "../agregar-comentario/agregar-comentario.component";

@Component({
  selector: 'app-open-close',
  standalone: true,
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.css',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        height: '0',
        opacity: 0,
      })),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  imports: [AgregarComentarioComponent]
})
export class OpenCloseComponent {
  @Input({ required: true, alias: "openClose" }) isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
