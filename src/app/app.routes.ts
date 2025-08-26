import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { AuthGuard } from './resources/services/auth-guard';


export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./views/dashboard/dashboard-module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: '**',
        redirectTo: ''
    },


];
