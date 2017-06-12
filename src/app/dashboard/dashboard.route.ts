import {Route} from '@angular/router';

import {AdminRoutes} from './admin/admin.route';

export const DashboardRoutes: Route[] = [
    ...AdminRoutes
];