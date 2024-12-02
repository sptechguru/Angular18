import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployesService } from '../../Services/employes.service';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { IProject } from '../../Model/interface/master';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-project-list',
    imports: [RouterLink, DatePipe],
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {

  emPSrv = inject(EmployesService);
  $ProjectList: any = new Observable();
  router = inject(Router);

  empProjectList: IProject [] = [];

  ngOnInit(): void {
    this.lodProjectList();
  }


  lodProjectList() {
    this.emPSrv.getAllProjects().subscribe((res:any) => {
      this.empProjectList = res;
      // console.log(this.empProjectList)
    }, error => {
      // console.log(error)
      this.emPSrv.getError(error.message);
    })
  }

  onEdit(prid: any) {
   this.router.navigate(['add-project',prid]);
  }


 
  onDelete(id: number) {
    console.log('Employee id ', id)
    const confirmed = confirm('Are You sure Want to Delete ??');
    if (confirmed) {
      this.emPSrv.deleteProject(id).subscribe((res:any) => {
        // alert("Employee Delted  Succesufully");
         this.emPSrv.getError("Employee Delted  Succesufully");
        this.lodProjectList();
      },error=>{
        this.emPSrv.getError(error.message);
      })
    }
  }



}
