import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
    console.log('profile Data ', this.profile)
  }

  router = inject(Router);
  profile: any;

  logOut() {
    localStorage.removeItem('USER');
    localStorage.clear();
    this.router.navigateByUrl('/')
  }

}
