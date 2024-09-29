import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../Model/class/Employee';
import { IApiResponse, IChildDept, IProject, IProjectEmployee } from '../Model/interface/master';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  readonly apiBaseurlurl: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  constructor(private http: HttpClient, private toastr: ToastrService) { }


  private userDetailsBus = new BehaviorSubject<any>([]);
  userDetails = this.userDetailsBus.asObservable();

  setLoginDetails(userDetails: any) {
    this.userDetailsBus.next(userDetails);
  }


  ////////////////////// Get Set Local Stroges Service ///////////////////////////// 


  // Set item in local storage
  setItem(key: string, value: any): void {
    const serializedValue = JSON.stringify(value);
    return localStorage.setItem(key, serializedValue);
  }

  // Get item from local storage
  getItem<T>(key: string): T | null {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue) {
      return JSON.parse(serializedValue);
    }
    return null;
  }

  // Remove item from local storage
  removeItem(key: string): void {
    return localStorage.removeItem(key);
  }

  // Clear all local storage
  clear(): void {
    return localStorage.clear();
  }

  // Check if a key exists in local storage
  hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }


  ////////////////////// Ngx Toaster///////////////////////////// 


  getSucces(msg: string) {
    return this.toastr.success(msg);
  }

  getError(msg: string) {
    return this.toastr.error(msg);
  }


  ////////////////////// All get Methods here///////////////////////////// 

  getDashbord() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetDashboard`);
  }

  getParentDepartMent(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiBaseurlurl}GetParentDepartment`);
  }

  getChildDepartmentByParentId(deptId: number): Observable<IChildDept> {
    return this.http.get<IChildDept>(`${this.apiBaseurlurl}GetChildDepartmentByParentId?deptId=${deptId}`);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiBaseurlurl}GetAllEmployees`);
  }

  getAllChildDepartment() {
    return this.http.get<any>(`${this.apiBaseurlurl}GetAllChildDepartment`);
  }


  getEmployeeById(emid: any) {
    return this.http.get<any>(`${this.apiBaseurlurl}GetAllEmployee${emid}`);
  }


  getAllProjectEmployees(): Observable<IProjectEmployee[]> {
    return this.http.get<IProjectEmployee[]>(`${this.apiBaseurlurl}GetAllProjectEmployees`);
  }

  getProjectEmployeeID(prId: any) {
    return this.http.get<any>(`${this.apiBaseurlurl}GetProjectEmployee ${prId}`);
  }


  getAllProjects(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiBaseurlurl}GetAllProjects`);
  }

  getProjectById(prId: any) {
    return this.http.get<any>(`${this.apiBaseurlurl}GetProject/ ${prId}`);
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


  createProject(obj: Employee): Observable<IProject> {
    return this.http.post<IProject>(`${this.apiBaseurlurl}CreateProject`, obj);
  }


  createProjectEmployee(obj: IProjectEmployee): Observable<IProject> {
    return this.http.post<IProject>(`${this.apiBaseurlurl}CreateProjectEmployee`, obj);
  }


  ////////////////////// All Put Update  Methods here///////////////////////////// 


  updateEmployees(obj: Employee): Observable<IApiResponse> {
    return this.http.put<any>(`${this.apiBaseurlurl}UpdateEmployee/ ${obj.employeeId}`, obj);
  }

  updateProjectEmployee(obj: IProjectEmployee): Observable<IProjectEmployee> {
    return this.http.put<IProjectEmployee>(this.apiBaseurlurl + "UpdateProjectEmployee/" + obj.empProjectId, obj);
  }

  updateProject(obj: IProject): Observable<IProject> {
    return this.http.put<IProject>(this.apiBaseurlurl + "UpdateProject/" + obj.projectId, obj);
  }



  ////////////////////// All Delete Methods here///////////////////////////// 


  deletedepartmentBydepartmentId(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeletedepartmentBydepartmentId?departmentId=${id}`);
  }


  deleteChildDeptById(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteChildDeptById?childDeptId=${id}`);
  }


  deleteEmployee(id: number): Observable<IApiResponse> {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteEmployee/${id}`);
  }


  deleteProjectEmployee(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteProjectEmployee/${id}`);
  }


  deleteProject(id: any) {
    return this.http.delete<any>(`${this.apiBaseurlurl}DeleteProject=${id}`);
  }

}
