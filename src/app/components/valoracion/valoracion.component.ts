import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './valoracion.component.html',
  styleUrl: './valoracion.component.css',
})
export class ValoracionComponent {
  @Output() valoracion = new EventEmitter<number>();
  hover = [true, false, false, false, false];
  selected = 0;

  onMouseOver(index: number) {
    this.hover = this.hover.map((_, i) => i <= index);
  }

  mouseout() {
    this.hover = this.hover.map(() => false);

    if (this.selected) {
      this.hover = this.hover.map((_, i) => i < this.selected);
    } else {
      this.hover[0] = true;
    }
  }

  onClick(index: number) {
    this.hover = this.hover.map((_, i) => i <= index)
    this.selected = index + 1;
  }
}
