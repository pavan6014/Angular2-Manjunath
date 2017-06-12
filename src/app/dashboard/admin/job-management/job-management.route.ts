import {Route} from '@angular/router';
import {JobManagementComponent} from './job-management.component';

export const JobManagementRoutes: Route[] = [
    {
        path: 'jobs',
        component: JobManagementComponent
    }
];