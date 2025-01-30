import { Component, inject, OnInit } from '@angular/core';
import { EmployesService } from '../../Services/employes.service';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { AlertComponent } from '../../Core/alert/alert.component';
import { ButtonComponent } from "../../Core/button/button.component";
import { DialogComponent } from '../../Core/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from '../employee/employee.component';
import { HighLightDirective } from '../../directive/high-light.directive';

@Component({
    selector: 'app-dashboard',
    imports: [
      DatePipe, 
      CommonModule, LoaderComponent, 
      NgIf, AlertComponent, 
      ButtonComponent
      // HighLightDirective
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  dashbordsList:any = [];
  loader:boolean = false;
  childMsg:string = 'Dashbords data show in alert core  Components';
  readonly dialog = inject(MatDialog);

  constructor(private emp:EmployesService){}

  ngOnInit() {
    this.getDashbord();
  }

  method(e:any){
    this.childMsg = e;
    console.log("Method callled..........",e)
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '100%',
      maxWidth:'400px',
      // hasBackdrop:false,
      disableClose:true,
      // minWidth:'400px',
      // height: '350px',
      panelClass:'custom-class',
      data: {
        title: 'My Custom Dialog',
        body: 'This is a custom message!',
        component: EmployeeComponent,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }


  getDashbord(){
    this.loader = true;
    this.emp.getDashbord().subscribe((res)=>{
      this.dashbordsList = res;
      this.loader = false;
      // console.log(this.dashbordsList);
    }, error=>{
      this.loader = false;
      console.log(error)
    })
  }
}
