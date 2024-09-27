export class Employee {
    employeeId: number;
    employeeName: string;
    gender: string;
    role: string;
    password: string;
    deptId: number;
    emailId: string;
    contactNo: string;


    constructor() {
        this.employeeId = 0;
        this.contactNo = '';
        this.role = '';
        this.emailId = '';
        this.deptId = 0;
        this.password = '';
        this.employeeName = '';
        this.gender = '';
    }
}