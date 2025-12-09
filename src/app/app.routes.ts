

import { Routes } from '@angular/router';
import { publicGuard } from './core/guards/public-guard';
import { authGuard } from './core/guards/auth-guard';
import { SimpsonDetailPage } from './features/simpsons/SimpsonDetailPage/SimpsonDetailPage';
import { FavoritesService } from './features/simpsons/services/favorites';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/login-page/login-page').then(m => m.LoginPage),
        canActivate: [publicGuard] // Solo si NO está autenticado
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/pages/register-page/register-page').then(m => m.RegisterPage),
        canActivate: [publicGuard]// Solo si NO está autenticado
    },
    {
        path: 'home',
        loadComponent: () => import('./features/daisyui-page/daisyui-page').then(m => m.DaisyuiPage),
        // SIN guard: Accesible para todos
    },
    {
        path: 'estilos',
        loadComponent: () => import('./features/estilos-page/estilos-page').then(m => m.EstilosPage),
        canActivate: [authGuard] // Requiere autenticación
    },
    {
        path: 'simpsons',
        loadComponent: () => import('./features/simpsons/simpsonsPage/simpsonsPage').then(m => m.SimpsonsPage),
        canActivate: [authGuard] // Requiere autenticación
    },
    {
        path: 'simpsons/:id',
        loadComponent: () => import('./features/simpsons/SimpsonDetailPage/SimpsonDetailPage').then(m => m.SimpsonDetailPage)
    },
    {
        path: 'favoritos',
        loadComponent: () => import('./features/simpsons/services/favorites').then(m => m.FavoritesService),
        canActivate: [authGuard]

    },
    {
        path: '**',
        redirectTo: 'home'  //login
    }
];