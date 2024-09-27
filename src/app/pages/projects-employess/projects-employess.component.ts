import { Component, inject, signal } from '@angular/core';
import { IApiResponse, IChildDept } from '../../Model/iterface/master';
import { EmployesService } from '../../Services/employes.service';
import { Employee } from '../../Model/class/Employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects-employess',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './projects-employess.component.html',
  styleUrl: './projects-employess.component.css'
})
export class ProjectsEmployessComponent {

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
    console.log(this.employeeObj)
  }

  addModeBox(){
    this.employeeObj = new Employee();
    this.isempFormVisble.set(true);
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
    this.empSrv.getChildDepartmentByParentId(this.parenDeptId).subscribe((res:IChildDept)=>{
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
