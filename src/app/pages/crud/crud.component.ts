import { Component, inject, signal } from '@angular/core';
import { IApiResponse, IChildDept, IProject, IProjectEmployee } from '../../Model/interface/master';
import { EmployesService } from '../../Services/employes.service';
import { Employee } from '../../Model/class/Employee';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { LocalServerService } from '../../Services/local-server.service';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule, DatePipe, ReactiveFormsModule, AsyncPipe],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})


export class CrudComponent {

  projectEmpoyeeList: any = signal<IProjectEmployee[]>([]);
  empSrv = inject(LocalServerService);
  parenDeptId: number = 0;
  projectempForm!: FormGroup;
  projectList$: Observable<any[]> = new Observable<any[]>;
  empList$: Observable<Employee[]> = new Observable<Employee[]>;
  isbtn = signal<boolean>(true);
  userId:any = 0;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loadAllProjectsEmp();
    this.intiForm();
  }

  intiForm() {
    this.projectempForm = this.fb.group({
      empProjectId: [],
      projectId: [],
      empId: [],
      assignedDate: [''],
      role: [''],
      isActive: [false]
    })
  }


  loadAllProjectsEmp() {
    this.empSrv.getAllProjectEmployees().subscribe((res: IProjectEmployee[]) => {
      this.projectEmpoyeeList.set(res)
      // console.log(res);
    },
      error => {
        // console.log(error)
        this.empSrv.getError(error.message);
      })
  }


  onSave() {
    const formValue = this.projectempForm.value;
    this.empSrv.createProjectEmployee(formValue).subscribe((res: IProject) => {
      // alert("Employee Create to Project Succesufully");
      this.empSrv.getSucces('Employee Create to Project Succesufully')
      this.projectempForm.reset();
      this.loadAllProjectsEmp();
    },
      error => {
        // console.log(error)
      this.empSrv.getError(error.message);

      })
  }


  onUpdate() {
    const formValue = this.projectempForm.value;
    // console.log("update form values", formValue)
    this.empSrv.updateProjectEmployee( this.userId ,formValue).subscribe((res) => {
      // alert("Employee Update to Project Succesufully");
      this.empSrv.getSucces('Employee Update to Project Succesufully')
      this.loadAllProjectsEmp();
    }, error => {
      // console.log(error)
      this.empSrv.getError(error.message);

    })
  }


  onEdit(item: any) {
    console.log("Edit form", item);
    this.isbtn.set(false);
    this.userId = item.id;
    this.projectempForm.patchValue({
      empProjectId: item.employeeName,
      projectId: item.projectId,
      empId: item.empId,
      assignedDate: item.assignedDate,
      role: item.role,
      isActive: item.isActive
    })
  }

  onDelete(id: number) {
    // console.log('Employee id ', id)
    const confirmed = confirm('Are You sure Want to Delete ??');
    if (confirmed) {
      this.empSrv.deleteProjectEmployee(id).subscribe((res: IApiResponse) => {
        // alert("Employee Delted Project  Succesufully");
        this.empSrv.getError("Employee Delted Project  Succesufully")
        this.loadAllProjectsEmp();
      }, error=>{
       this.empSrv.getError(error.message);
      })
    }
  }

  back(){
    this.isbtn.set(true);
    this.projectempForm.reset();
  }
}
