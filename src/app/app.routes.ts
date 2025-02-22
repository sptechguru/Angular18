import { ProjectListComponent } from './pages/project-list/project-list.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectFormComponent } from './pages/project-form/project-form.component';
import { ProjectsEmployessComponent } from './pages/projects-employess/projects-employess.component';
import { AuthGuard } from './Auth/auth.guard';
import { UnitTestingComponent } from './pages/unit-testing/unit-testing.component';
import { ChartJsComponent } from './pages/chart-js/chart-js.component';
import { DounutChartComponent } from './pages/dounut-chart/dounut-chart.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'test',
        component: UnitTestingComponent
    },
    {
        path: 'chart',
        component: ChartJsComponent
    },

    {
        path: 'high-chart',
        component: DounutChartComponent
    },
    
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                title: 'Dashboard'
            },
            {
                path: 'employee',
                component: EmployeeComponent,
                title: 'Employee'
            },

            {
                path: 'add-project/:id',
                component: ProjectFormComponent,
                title: 'Project'
            },
            {
                path: 'project-list',
                component: ProjectListComponent,
                title: 'All projects'
            },

            {
                path: 'project-emp',
                component: ProjectsEmployessComponent,
                title: 'Projects Employee'
            }
        ]
    }
];
