import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../../Services/employes.service';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { AlertComponent } from '../../Core/alert/alert.component';
import { ButtonComponent } from "../../Core/button/button.component";

@Component({
    selector: 'app-dashboard',
    imports: [DatePipe, CommonModule, LoaderComponent, NgIf, AlertComponent, 
      ButtonComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  dashbordsList:any = [];
  loader:boolean = false;
  childMsg:string = 'Dashbords data show in alert core  Components';

  constructor(private emp:EmployesService){}

  ngOnInit() {
    this.getDashbord();
  }

  method(e:any){
    this.childMsg = e;
    console.log("Method callled..........",e)
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
