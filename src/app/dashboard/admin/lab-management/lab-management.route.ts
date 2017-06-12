import {Route} from '@angular/router';
import {LabManagementComponent} from './lab-management.component';

export const LabManagementRoutes: Route[] = [
    {
        path: 'labs',
        component: LabManagementComponent
    }
];