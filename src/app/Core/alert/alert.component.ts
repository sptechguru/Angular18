import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule, NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  @Input() message:string = '';
  @Input() alertType:string = '';

  constructor(){
    console.log("alert Type.......", this.alertType)
  }
  

}
