import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../../Services/employes.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  dashbordsList:any = [];

  constructor(private emp:EmployesService){}

  ngOnInit() {
    this.getDashbord();
  }


  getDashbord(){
    this.emp.getDashbord().subscribe((res)=>{
      this.dashbordsList = res;
      // console.log(this.dashbordsList);
    }, error=>{
      console.log(error)
    })
  }



}
