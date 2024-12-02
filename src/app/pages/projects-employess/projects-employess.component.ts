import { Component, inject, signal } from '@angular/core';
import { IApiResponse, IChildDept, IProject, IProjectEmployee } from '../../Model/interface/master';
import { EmployesService } from '../../Services/employes.service';
import { Employee } from '../../Model/class/Employee';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-projects-employess',
    imports: [FormsModule, DatePipe, ReactiveFormsModule, AsyncPipe],
    templateUrl: './projects-employess.component.html',
    styleUrl: './projects-employess.component.css'
})
export class ProjectsEmployessComponent {

  projectEmpoyeeList: any = signal<IProjectEmployee[]>([]);
  empSrv = inject(EmployesService);
  parenDeptId: number = 0;
  projectempForm!: FormGroup;
  projectList$: Observable<any[]> = new Observable<any[]>;
  empList$: Observable<Employee[]> = new Observable<Employee[]>;
  isbtn = signal<boolean>(true);



  constructor(private fb: FormBuilder) {
    this.projectList$ = this.empSrv.getAllProjects();
    this.empList$ = this.empSrv.getAllEmployees();
  }

  ngOnInit(): void {
    this.loadAllProjectsEmp();
    this.intiForm();
  }

  intiForm() {
    this.projectempForm = this.fb.group({
      empProjectId: [0],
      projectId: [0],
      empId: [0],
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
    this.empSrv.updateProjectEmployee(formValue).subscribe((res) => {
      // alert("Employee Update to Project Succesufully");
      this.empSrv.getSucces('Employee Update to Project Succesufully')
      this.loadAllProjectsEmp();
    }, error => {
      // console.log(error)
      this.empSrv.getError(error.message);

    })
  }


  onEdit(item: any) {
    // console.log("Edit form", item);
    this.isbtn.set(false);
    this.projectempForm.patchValue({
      empProjectId: item.empProjectId,
      projectId: item.empProjectId,
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
}
