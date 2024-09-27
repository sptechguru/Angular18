import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployesService } from '../../Services/employes.service';
import { IApiResponse, IChildDept, IParentDept } from '../../Model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../Model/class/Employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  empList: any = signal<any>([]);
  parentEmpList: any = signal<any>([]);
  childDeptEmpList: any = signal<IChildDept[]>([]);
  isempFormVisble = signal<boolean>(false);
  empSrv = inject(EmployesService);
  parenDeptId: number = 0;
  employeeObj: Employee = new Employee();

  ngOnInit(): void {
    this.loadEmployee();
    this.loadParentDept();
  }



  loadParentDept() {
    this.empSrv.getParentDepartMent().subscribe((res: IApiResponse) => {
      console.log('parent dept', res.data);
      this.parentEmpList.set(res.data);
    }, error => {
      console.log(error)
    })
  }

  onParentDeptIdChange() {
    console.log(this.parenDeptId)
    this.empSrv.getChildDepartmentByParentId(this.parenDeptId).subscribe((res: IChildDept) => {
      console.log(res);
    })
  }


  loadEmployee() {
    this.empSrv.getAllEmployees().subscribe((res: Employee[]) => {
      this.empList.set(res)
      console.log(res);
    },
      error => {
        console.log(error)
      })
  }


  onSave() {
    this.empSrv.createEmployee(this.employeeObj).subscribe((res: IApiResponse) => {
      alert("Employee Create Succesufully");
      this.loadEmployee();
      this.employeeObj = new Employee();
    },
      error => {
        console.log(error)
      })
  }

  onUpdate() {
    this.empSrv.updateEmployees(this.employeeObj).subscribe((res) => {
      alert("Employee Update  Succesufully");
      this.loadEmployee();
      this.employeeObj = new Employee();
    }, error => {
      console.log(error)
    })
  }


  onEdit(item: Employee) {
    this.employeeObj = item;
    console.log('Edit Form  ', this.employeeObj)
    this.isempFormVisble.set(true);
  }



  onDelete(id: number) {
    console.log('Employee id ', id)
    const confirmed = confirm('Are You sure Want to Delete ??');
    if (confirmed) {
      this.empSrv.deleteEmployee(id).subscribe((res: IApiResponse) => {
        alert("Employee Delted  Succesufully");
        this.loadEmployee();
      })
    }
  }

}
