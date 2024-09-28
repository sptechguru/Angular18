import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: '',
    developeruser:"santosh pal",
    user_pic:'https://avatars3.githubusercontent.com/u/58684635?s=460&amp;u=f7af97454174f4f3a0c1b2db9b79cf1206b9a424&amp;v=4',
  };
  router = inject(Router)
  userName:any = 'Santosh';
  pass:any = 883900;

  onLogin() {
    if(this.loginObj.userName == this.userName && this.loginObj.password == this.pass) {
      localStorage.setItem('USER',JSON.stringify(this.loginObj))
      this.router.navigateByUrl('/dashboard')
    } else {
      alert('Wrong Credentials')
    }
  }

}
