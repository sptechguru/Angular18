import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployesService } from '../../Services/employes.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  empList: any = signal<any>([]);

  emp = inject(EmployesService);

  ngOnInit(): void {
    this.getEmployee();
  }


  getEmployee() {
    this.emp.getAllEmployees().subscribe((res) => {
      this.empList.set(res)
      console.log(res);
    }, error => {
      console.log(error)
    })
  }


}
