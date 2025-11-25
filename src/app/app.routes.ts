import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { SimpsonDetailPage } from './features/simpsons/SimpsonDetailPage/SimpsonDetailPage';
import { SimpsonsPage } from './features/simpsons/simpsonsPage/simpsonsPage';

export const routes: Routes = [


    {
        path: '',
        component: DaisyuiPage
    },

    {
        path: 'estilos-page',
        component: EstilosPage
    },
    {

        path: 'simpsons',
        component: SimpsonsPage
    },
    {

        path: 'simpsons/:id',
        component: SimpsonDetailPage
    },
    

];
