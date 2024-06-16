import { NgClass } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './valoracion.component.html',
  styleUrl: './valoracion.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ValoracionComponent),
    multi: true
  }]
})
export class ValoracionComponent implements ControlValueAccessor {
  hover = [false, false, false, false, false];
  selected = 0;

  private onChange: (rating: number) => void = () => { };
  private onTouched: () => void = () => { };

  constructor() { }

  writeValue(rating: number): void {
    if (rating !== undefined) {
      this.selected = rating;
      this.hover = this.hover.map((_, i) => i < rating);
    } else {
      this.selected = 0;
      this.hover = [true, false, false, false, false];
    }
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onMouseOver(index: number) {
    this.hover = this.hover.map((_, i) => i <= index);
  }

  onMouseOut(): void {
    if (!this.selected) {
      this.hover = [true, false, false, false, false];
    } else {
      this.hover = this.hover.map((_, i) => i < this.selected);
    }
  }

  mouseout() {
    this.hover = this.hover.map(() => false);
    if (this.selected) {
      this.hover = this.hover.map((_, i) => i < this.selected);
    }
  }

  onClick(index: number): void {
    this.selected = index + 1;
    this.hover = this.hover.map((_, i) => i <= index);
    this.onChange(this.selected);
  }
}
