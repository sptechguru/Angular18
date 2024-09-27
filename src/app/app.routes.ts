import { ProjectListComponent } from './pages/project-list/project-list.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SubMenuLayoutComponent } from './pages/sub-menu-layout/sub-menu-layout.component';
import { ProjectFormComponent } from './pages/project-form/project-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginComponent
    }, 
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component: DashboardComponent,
                title: 'Dashboard'
            },
            {
                path:'employee',
                component: EmployeeComponent,
                title: 'Employee'
            },

            {
                path:'add-project/:id',
                component: ProjectFormComponent,
                title: 'Project'
            },
            {
                path:'project-list',
                component: ProjectListComponent,
                title: 'All projects'
            }
        ]
    }
];
