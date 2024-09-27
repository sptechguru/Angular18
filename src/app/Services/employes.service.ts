import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getParentDepartMent() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetParentDepartment`);
  }


  getAllChildDepartment() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetAllChildDepartment`);
  }

  getChildDepartmentByParentId() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetChildDepartmentByParentId`);
  }


  getAllEmployees() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetAllEmployees`);
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


  ////////////////////// All Put Methods here///////////////////////////// 


  updateEmployees(id: any, obj: any) {
    return this.http.put<any>(`${this.apiBaseurlurl}UpdateEmployee ${id}`, obj);
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


  deleteEmployee(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteEmployee=${id}`);
  }


  deleteProjectEmployee(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteProjectEmployee=${id}`);
  }



  deleteProject(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteProject=${id}`);
  }

}
