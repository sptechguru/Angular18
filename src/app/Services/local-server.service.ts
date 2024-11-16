import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject, IProjectEmployee } from '../Model/interface/master';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocalServerService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  readonly apiBaseurlurl: string = 'http://localhost:3000/Employee';


  getSucces(msg: string) {
    return this.toastr.success(msg);
  }

  getError(msg: string) {
    return this.toastr.error(msg);
  }


  getAllProjectEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseurlurl}`);
  }


  createProjectEmployee(obj: any): Observable<IProject> {
    return this.http.post<any>(`${this.apiBaseurlurl}`, obj);
  }
  

  updateProjectEmployee(id:any,obj: any): Observable<any> {
    return this.http.put<any>(this.apiBaseurlurl +'/'+ id, obj);
  }

  
  deleteProjectEmployee(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}/${id}`);
  }

}
