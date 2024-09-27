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