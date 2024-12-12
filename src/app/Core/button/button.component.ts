import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() btnmessage: string = '';
  @Input() color: string = '';
  @Output() onBtnClick = new EventEmitter<any>();

  onClick(item:any) {
    // debugger;
    // this.onBtnClick.emit(item);
    this.onBtnClick.emit('Child to data transfer in Parent Componets');

  }
}
