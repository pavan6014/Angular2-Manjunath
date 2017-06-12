import {Route} from '@angular/router';

import {JobManagementRoutes} from './job-management/job-management.route';
import {LabManagementRoutes} from './lab-management/lab-management.route';

export const AdminRoutes: Route[] = [
    ...JobManagementRoutes,
    ...LabManagementRoutes
];