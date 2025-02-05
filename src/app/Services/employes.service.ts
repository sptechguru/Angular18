import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../Model/class/Employee';
import { IApiResponse, IChildDept, IProject, IProjectEmployee } from '../Model/interface/master';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  readonly apiBaseUrl = environment.apiBaseUrl;
  readonly secretKey = environment.secretKey // Use an environment variable in a real project

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
    // console.log("Localstorage ed=nction values", serializedValue)
    return localStorage.setItem(key, this.encryptData(serializedValue));
  }

  // Get item from local storage
  getItem<T>(key: string): T | null {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue) {
      return JSON.parse(this.decryptData(serializedValue));
    }
    return null;
  }

   // Encrption & Descrption for using crptojs 

   encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  decryptData(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
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
    return this.http.get<any>(`${this.apiBaseUrl}GetDashboard`);
  }

  getParentDepartMent(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiBaseUrl}GetParentDepartment`);
  }

  getChildDepartmentByParentId(deptId: number): Observable<IChildDept> {
    return this.http.get<IChildDept>(`${this.apiBaseUrl}GetChildDepartmentByParentId?deptId=${deptId}`);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiBaseUrl}GetAllEmployees`);
  }

  getAllChildDepartment() {
    return this.http.get<any>(`${this.apiBaseUrl}GetAllChildDepartment`);
  }


  getEmployeeById(emid: any) {
    return this.http.get<any>(`${this.apiBaseUrl}GetAllEmployee${emid}`);
  }


  getAllProjectEmployees(): Observable<IProjectEmployee[]> {
    return this.http.get<IProjectEmployee[]>(`${this.apiBaseUrl}GetAllProjectEmployees`);
  }

  getProjectEmployeeID(prId: any) {
    return this.http.get<any>(`${this.apiBaseUrl}GetProjectEmployee ${prId}`);
  }


  getAllProjects(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiBaseUrl}GetAllProjects`);
  }

  getProjectById(prId: any) {
    return this.http.get<any>(`${this.apiBaseUrl}GetProject/ ${prId}`);
  }


  ////////////////////// All Post Methods here///////////////////////////// 


  addNewDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseUrl}AddNewDepartment`, obj);
  }

  addBulkDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseUrl}AddBulkDepartment`, obj);
  }

  updateDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseUrl}UpdateDepartment`, obj);
  }

  addChildDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseUrl}AddChildDepartment`, obj);
  }


  updateChildDepartment(obj: any) {
    return this.http.post<any>(`${this.apiBaseUrl}UpdateChildDepartment`, obj);
  }


  createEmployee(obj: any) {
    return this.http.post<any>(`${this.apiBaseUrl}CreateEmployee`, obj);
  }


  createProject(obj: Employee): Observable<IProject> {
    return this.http.post<IProject>(`${this.apiBaseUrl}CreateProject`, obj);
  }


  createProjectEmployee(obj: IProjectEmployee): Observable<IProject> {
    return this.http.post<IProject>(`${this.apiBaseUrl}CreateProjectEmployee`, obj);
  }


  ////////////////////// All Put Update  Methods here///////////////////////////// 


  updateEmployees(obj: Employee): Observable<IApiResponse> {
    return this.http.put<any>(`${this.apiBaseUrl}UpdateEmployee/ ${obj.employeeId}`, obj);
  }

  updateProjectEmployee(obj: IProjectEmployee): Observable<IProjectEmployee> {
    return this.http.put<IProjectEmployee>(this.apiBaseUrl + "UpdateProjectEmployee/" + obj.empProjectId, obj);
  }

  updateProject(obj: IProject): Observable<IProject> {
    return this.http.put<IProject>(this.apiBaseUrl + "UpdateProject/" + obj.projectId, obj);
  }



  ////////////////////// All Delete Methods here///////////////////////////// 


  deletedepartmentBydepartmentId(id: any) {
    return this.http.delete<any>(`${this.apiBaseUrl}DeletedepartmentBydepartmentId?departmentId=${id}`);
  }


  deleteChildDeptById(id: any) {
    return this.http.delete<any>(`${this.apiBaseUrl}DeleteChildDeptById?childDeptId=${id}`);
  }


  deleteEmployee(id: number): Observable<IApiResponse> {
    return this.http.delete<any>(`${this.apiBaseUrl}DeleteEmployee/${id}`);
  }


  deleteProjectEmployee(id: any) {
    return this.http.delete<any>(`${this.apiBaseUrl}DeleteProjectEmployee/${id}`);
  }


  deleteProject(id: any) {
    return this.http.delete<any>(`${this.apiBaseUrl}DeleteProject=${id}`);
  }

}
