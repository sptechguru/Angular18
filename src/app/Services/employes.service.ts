import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse, IChildDept } from '../Model/interface/master';
import { Employee } from '../Model/class/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  readonly apiBaseurlurl: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  constructor(private http: HttpClient) { }


  ////////////////////// All get Methods here///////////////////////////// 

  getDashbord() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetDashboard`);
  }

  getParentDepartMent() :Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiBaseurlurl}GetParentDepartment`);
  }

  getChildDepartmentByParentId(deptId:number):Observable<IChildDept> {
    return this.http.get<IChildDept>(`${this.apiBaseurlurl}GetChildDepartmentByParentId?deptId=${deptId}`);
  }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee []>(`${this.apiBaseurlurl}GetAllEmployees`);
  }

  getAllChildDepartment()  {
    return this.http.get<any>(`${this.apiBaseurlurl}GetAllChildDepartment`);
  }




  getEmployeeById(emid: any) {
    return this.http.get<any>(`${this.apiBaseurlurl}GetAllEmployee${emid}`);
  }


  getAllProjectEmployees() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetAllProjectEmployees`);
  }

  getProjectEmployeeID(prId: any) {
    return this.http.get<any>(`${this.apiBaseurlurl}GetProjectEmployee ${prId}`);
  }


  getAllProjects() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetAllProjects`);
  }

  getProjectById(prId: any) {
    return this.http.get<any>(`${this.apiBaseurlurl}GetProject ${prId}`);
  }


  ////////////////////// All Post Methods here///////////////////////////// 


  addNewDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseurlurl}AddNewDepartment`, obj);
  }

  addBulkDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseurlurl}AddBulkDepartment`, obj);
  }

  updateDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseurlurl}UpdateDepartment`, obj);
  }

  addChildDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseurlurl}AddChildDepartment`, obj);
  }


  updateChildDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseurlurl}UpdateChildDepartment`, obj);
  }


  createEmployee(obj: any) {
    return this.http.post<any>(`${this.apiBaseurlurl}CreateEmployee`, obj);
  }


  createProject(obj: any) {
    return this.http.post<any>(`${this.apiBaseurlurl}CreateProject`, obj);
  }


  createProjectEmployee(obj: any) {
    return this.http.post<any>(`${this.apiBaseurlurl}CreateProjectEmployee`, obj);
  }


  ////////////////////// All Put Update  Methods here///////////////////////////// 


  updateEmployees(obj:Employee) :Observable <IApiResponse>{
    return this.http.put<any>(`${this.apiBaseurlurl}UpdateEmployee/ ${obj.employeeId}`, obj);
  }

  updateProjectEmployee(id: any, obj: any) {
    return this.http.put<any>(`${this.apiBaseurlurl}UpdateProjectEmployee ${id}`, obj);
  }

  updateProject(id: any, obj: any) {
    return this.http.put<any>(`${this.apiBaseurlurl}UpdateProject ${id}`, obj);
  }



  ////////////////////// All Delete Methods here///////////////////////////// 


  deletedepartmentBydepartmentId(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeletedepartmentBydepartmentId?departmentId=${id}`);
  }


  deleteChildDeptById(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteChildDeptById?childDeptId=${id}`);
  }


  deleteEmployee(id: number) :Observable<IApiResponse> {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteEmployee/${id}`);
  }


  deleteProjectEmployee(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteProjectEmployee=${id}`);
  }



  deleteProject(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteProject=${id}`);
  }

}
