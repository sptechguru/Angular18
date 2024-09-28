import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployesService } from '../../Services/employes.service';
import { Employee } from '../../Model/class/Employee';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IProject } from '../../Model/interface/master';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, AsyncPipe],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({});
  empSrv = inject(EmployesService);
  actveRoute = inject(ActivatedRoute);
  leadEmplolist$: Observable<Employee[]> = new Observable<[]>;
  projectId: number = 0;
  router = inject(Router);

  constructor() { }

  ngOnInit(): void {
    this.leadEmplolist$ = this.empSrv.getAllEmployees();
    this.initForm();
    this.actveRoute.params.subscribe((res: any) => {
      console.log('Parms', res.id)
      if (res.id != 0) {
        this.projectId = res.id;
        this.getProjectId(this.projectId)
      }
      else{
        this.projectId = 0;
      }
    })
  }

  initForm(data?: IProject) {
    this.projectForm = new FormGroup({
      projectId: new FormControl(data ? data.projectId : 0),
      projectName: new FormControl(data ? data.projectName : ''),
      clientName: new FormControl(data ? data.clientName : ''),
      startDate: new FormControl(data ? data.startDate : ''),
      leadByEmpId: new FormControl(data ? data.leadByEmpId : 0),
      contactPerson: new FormControl(data ? data.contactPerson : ''),
      contactNo: new FormControl(data ? data.contactNo : ''),
      emailId: new FormControl(data ? data.emailId : ''),
    })

  }

  getProjectId(id: number) {
    this.empSrv.getProjectById(id).subscribe((res: IProject) => {
      console.log('project by id ', res);
      this.initForm(res)
    }, error => {
      console.log(error)
    })
  }


  createProject() {
    const formValue = this.projectForm.value;
    console.log(formValue)
    this.empSrv.createProject(formValue).subscribe((res: IProject) => {
      alert('Project Created');
      this.projectForm.reset();
      this.router.navigate(['project-list']);
    }, error => {
      console.log(error)
    })

  }


  updateProject() {
    const formValue = this.projectForm.value;
    console.log('update project',formValue)
    this.empSrv.updateProject(formValue).subscribe((res: IProject) => {
      alert('updated Project');
      this.projectForm.reset();
      this.router.navigate(['project-list']);
    }, error => {
      console.log(error)
    })
  }

}
