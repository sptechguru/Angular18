export  interface IApiResponse {
    message:string;
    result:string;
    data:any;
}

export interface IParentDept {
    departmentId:number;
    departmentName:string;
    departmentLogo:string;
}


export interface IChildDept {
    childDeptId:number;
    departmentId:number;
    departmentName:string;
    
}

export interface IProjectEmployee {
    empProjectId:number;
    projectId:number;
    empId:number;
    assignedDate:string;
    role:string;
    isActive:string;
}



export interface IProject {
    projectId:number;
    projectName:string;
    clientName:string;
    startDate:string;
    leadByEmpId:string;
    contactPerson:string;
    contactNo:string;
    emailId:string;
}