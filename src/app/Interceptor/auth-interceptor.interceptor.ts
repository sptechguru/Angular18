import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { EmployesService } from '../Services/employes.service';


export class authInterceptorInterceptor implements HttpInterceptor {

  empSrv = inject(EmployesService);

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const data:any = this.empSrv.getItem('USER');
    const token = data.token;
    // console.log("token", token)
    if (token) {
      var cloneToken: any = req.clone({
        url: req.url,
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(cloneToken);
  }

}
