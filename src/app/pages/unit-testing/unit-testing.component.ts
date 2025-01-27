import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-testing',
  imports: [],
  templateUrl: './unit-testing.component.html',
  styleUrl: './unit-testing.component.css'
})
export class UnitTestingComponent {

num1:any = 1;
num2:any = 3;
result:any = ''

getSum(){
  return this.result = this.num1 + this.num2
}

onAdd(num1:number,num2:number){
  return num1 + num2
}



}
