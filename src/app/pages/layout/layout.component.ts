import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmployesService } from '../../Services/employes.service';
import { environment } from '../../../environments/environment.development';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor() {
    this.profile= this.empSrv.getItem(environment.localStorageKey);
    // console.log('profile Data ', this.profile)s
  }
  
  router = inject(Router);
  empSrv = inject(EmployesService)
  profile: any;

  logOut() {
    this.empSrv.getError("LogOut..??");
    this.empSrv.removeItem(environment.localStorageKey);
    this.empSrv.clear();
    this.router.navigateByUrl('/')
  }

}
