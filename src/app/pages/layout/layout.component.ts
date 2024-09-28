import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployesService } from '../../Services/employes.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor() {
    let data: any = localStorage.getItem('USER');
    this.profile = JSON.parse(data)
    // console.log('profile Data ', this.profile)
  }
  router = inject(Router);
  empSrv = inject(EmployesService)
  profile: any;

  logOut() {
    this.empSrv.getError("LogOut..??");
    localStorage.removeItem('USER');
    localStorage.clear();
    this.router.navigateByUrl('/')
  }

}
