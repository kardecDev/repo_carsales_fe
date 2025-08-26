import { Routes } from '@angular/router';
import { Login } from './views/login/login';


export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./views/dashboard/dashboard-module').then(
                (m) => m.DashboardModule
            ),
    }


];
