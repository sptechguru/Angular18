import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { EmployesService } from '../Services/employes.service';
import { environment } from '../../environments/environment.development';


export class authInterceptorInterceptor implements HttpInterceptor {

  empSrv = inject(EmployesService);

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const data:any = this.empSrv.getItem(environment.localStorageKey);
    const token = data.token;
    //console.log("token", token)
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
